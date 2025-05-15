import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ShopPageState {
    products: { [key: number]: ProductItemType[] },
    total: number,
    isLoading: boolean,
    isError: boolean,
    error: Error | null,
}
interface ShopPageActions {
    paginateProductsClientSide: (props: PaginateProductProps) => Promise<void>,
    fetchProductFromShop: (id: number) => ProductItemType | null,
    clearShopData: () => void
}

export const useShopPageState = create<ShopPageState & ShopPageActions>()(
    persist((set, get) => ({
        products: {},
        total: 0,
        isLoading: false,
        isError: false,
        error: null,
        fetchProductFromShop: (id) => {
            const currentState = get();
            for (let i = 1; i <= Math.ceil(currentState.total / 24); i++) {
                const productPage = currentState.products[i];
                if (productPage) {
                    const product = productPage.findLast(product => product.id === id);
                    if (product && product.title) {
                        // console.log(product)
                        return product; // Found the product, return it
                    }
                }
            }
            return null; // Product not found, return null
        },
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
    }), {
        name: 'shop-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
    ));
