import { create } from "zustand";

const useCart = create((set) => ({
    count: 0,
    addCount: () => set((state) => ({ count: state.count + 1 })),
    decCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),
}));

export default useCart;
