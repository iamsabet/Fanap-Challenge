import { create } from 'zustand'

type ProductPageState = {
    product: ProductItemType | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    fetchProduct: (id: number) => Promise<void>;
    clearProduct: () => void;
}

export const useProductPageStore = create<ProductPageState>(set => ({
    product: null,
    isLoading: false,
    isError: false,
    error: null,

    fetchProduct: async (id: number) => {
        set({ product: null, isLoading: true, isError: false, error: null });
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                set({ isError: true, isLoading: false });
                throw new Error('Network response was not ok');
            }

            const product = await response.json();
            set({ product, isLoading: false });
        } catch (error) {
            set({ isError: true, error: error as Error, isLoading: false });
        }
    },

    clearProduct: () => {
        set({ isLoading: false, isError: false, error: null, product: null });
    }
}));