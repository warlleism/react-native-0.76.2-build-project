import { create } from 'zustand';
import IProduct from '../../interfaces/product';

interface CounterState {
    cart: IProduct[] | null;
    price: number;
    addProduct: (data: IProduct) => void;
    moreQtd: (data: IProduct) => void;
    lessQtd: (data: IProduct) => void;
    removeProduct: (data: IProduct) => void;
    clearAllCart: () => void;
    calcProducts: () => void;
}

const useCartStore = create<CounterState>((set) => ({
    cart: null,
    price: 0,
    addProduct: (data: IProduct) => set((state) => ({
        cart: state.cart?.find((item) => item.name === data.name) ? state.cart : state.cart ? [...state.cart, data] : [data]
    })),

    removeProduct: (data: IProduct) => set((state) => {
        const filteredCart = state.cart ? state.cart.filter((item: IProduct) => item.name !== data.name) : [];
        return { cart: filteredCart };
    }),

    moreQtd: (data: IProduct) => set((state) => {
        const updatedCart = state.cart
            ? state.cart.map((item: IProduct) =>
                item.id === data.id
                    ? { ...item, qtd: (item.qtd || 0) + 1 }
                    : item
            )
            : [];

        return { ...state, cart: updatedCart };
    }),

    lessQtd: (data: IProduct) => set((state) => {
        const updatedCart = state.cart
            ? state.cart.map((item: IProduct) =>
                item.id === data.id
                    ? { ...item, qtd: (item.qtd || 0) - 1 }
                    : item
            )
            : [];

        return { ...state, cart: updatedCart };
    }),

    calcProducts: () => set((state) => {
        const totalValue = state.cart ? state.cart.reduce((accumulator, currentValue: IProduct) => {
            const qtd = currentValue.qtd || 0;
            const price = parseFloat(currentValue.price) || 0;

            return accumulator + (qtd * price);
        }, 0) : 0;
        return { price: totalValue };
    }),

    clearAllCart: () => set(() => ({ cart: null, price: 0 }))

}));

export default useCartStore;
