import ConfigState from "@/app/interfaces/config";
import { create } from "zustand";

const useConfigStore = create<ConfigState>((set) => ({
    theme: true,
    setTheme: () => set((state) => ({ theme: !state.theme })),
    size: 17,
    setSize: () => set((state) => ({ size: state.size === 20 ? 17 : 20 })),
    currency: 'USD',
    setCurrency: () => set((state) => ({ currency: state.currency === 'USD' ? 'BRL' : 'USD' }))
}));

export default useConfigStore;