import IProduct from '@/app/interfaces/product';
import { create } from 'zustand';
interface CounterState {
    product: IProduct | null;
    listProduct: (data: IProduct) => void;
}

const useListProduct = create<CounterState>((set) => ({
    product: null,
    listProduct: (data: any) => set({ product: data }),
}));

export default useListProduct;
