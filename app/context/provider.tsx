import { create } from 'zustand';
import IProduct from '../interfaces/product';
interface CounterState {
    product: IProduct | null;
    listProduct: (data: IProduct) => void;
}

const useCounterStore = create<CounterState>((set) => ({
    product: null,
    listProduct: (data: any) => set({ product: data }),
}));

export default useCounterStore;
