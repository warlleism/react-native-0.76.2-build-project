import IProduct from '@/app/interfaces/product';
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error storing data:', error);
    }
};

const getData = async (key: string): Promise<any> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
};
interface CounterState {
    product: IProduct | null;
    favorites: IProduct[] | null;
    listProduct: (data: IProduct) => void;
    listFavorites: (data: IProduct[]) => void;
    addFavorite: (data: IProduct) => void;
    removeFavorite: (data: IProduct) => void
    clearAllFavorites: () => void
    initialize: () => void
}

const useListProduct = create<CounterState>((set) => ({
    product: null,
    favorites: null,
    listProduct: (data: any) => set({ product: data }),
    listFavorites: (data: any) => set({ favorites: data }),
    addFavorite: (data: IProduct) => set((state) => {
        const productExist = state?.favorites?.find((item) => item.name === data.name)
        const updatedFavorites = productExist ? state.favorites?.filter((item: IProduct) => item.name !== data.name) : [...(state.favorites || []), data];
        storeData('favorites', updatedFavorites);
        return { favorites: updatedFavorites };
    }),
    removeFavorite: (data: IProduct) => set((state) => {
        const updatedFavorites = state.favorites ? state.favorites.filter((item: IProduct) => item.name !== data.name) : [];
        storeData('favorites', updatedFavorites);
        return { favorites: updatedFavorites };
    }),
    clearAllFavorites: () => set(() => {
        storeData('favorites', []);
        return { favorites: [] };
    }),
    initialize: async () => {
        const favorites = await getData('favorites');
        set({ favorites });
    }
}));

export default useListProduct;
