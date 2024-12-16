import ConfigState from "@/app/interfaces/config";
import { create } from "zustand";
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

const useConfigStore = create<ConfigState>((set) => ({
    theme: false,
    size: 17,
    currency: 'USD',

  
    setTheme: async () => set((state) => {
        const newTheme = !state.theme;
        storeData('theme', newTheme);
        return { theme: newTheme };
    }),

    setSize: (size) => set((state) => {
        const newSize = size
        storeData('size', newSize);
        return { size: newSize };
    }),
    setCurrency: () => set((state) => {
        const newCurrency = state.currency === 'USD' ? 'BRL' : 'USD'
        storeData('currency', newCurrency);
        return { currency: newCurrency };
    }),

    initialize: async () => {
        const theme = await getData('theme');
        const size = await getData('size');
        const currency = await getData('currency');
        set(() => ({
            theme: theme ?? false,
            size: size ?? 17,
            currency: currency ?? 'USD'
        }))
    }
}));

export default useConfigStore;