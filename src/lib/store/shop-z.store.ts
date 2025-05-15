import { create } from 'zustand'

type PaginateProductProps = {
    page?: number;
    limit?: number;
}

type ShopPageState = {
    products: { [key: number]: ProductItemType[] },
    total: number,
    isLoading: boolean,
    isError: boolean,
    error: Error | null,
    paginateProductsClientSide: (props: PaginateProductProps) => Promise<void>,
    clearShopData: () => void
}

export const useShopPageState = create<ShopPageState>((set, get) => ({
    products: {},
    total: 0,
    isLoading: false,
    isError: false,
    error: null,
    paginateProductsClientSide: async ({ page = 1, limit = 24 }: PaginateProductProps) => {
        const currentState = get();
        if (currentState.products[page]) {
            return;
        }
        set({ isLoading: true, isError: false, error: null });
        try {
            const skip = (page - 1) * limit;
            const select = `id,title,price,rating,stock,images,thumbnail,meta,discountPercentage,category,description,tags`;
            const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`);
            if (!data.ok) {
                set({ isError: true, isLoading: false });
                throw new Error('Network response was not ok');
            }
            const products = await data.json();
            set(state => ({
                products: { ...state.products, [page]: products.products },
                total: products.total,
                isLoading: false
            }));
        } catch (error) {
            set({ isError: true, error: error as Error, isLoading: false });
        }
    },
    clearShopData: () => {
        set({
            isLoading: false,
            isError: false,
            error: null,
            products: {}
        });
    }
}));