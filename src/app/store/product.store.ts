import { proxy } from "valtio";

type ProductPageState = {
    product: ProductItemType | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
}

export const productPageState = proxy<ProductPageState>({
    product: null,
    isLoading: false,
    isError: false,
    error: null,

});

export const fetchProduct = async (id: number) => {
    productPageState.product = null;
    productPageState.isLoading = true;
    productPageState.isError = false;
    productPageState.error = null;
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            productPageState.isError = true;
            productPageState.isLoading = false;
            throw new Error('Network response was not ok');
        }
        const product = await response.json();
        productPageState.product = product;
        productPageState.isLoading = false;
    } catch (error) {
        productPageState.isError = true;
        productPageState.error = error as Error;
        productPageState.isLoading = false;
    }
}
export const clearProduct = async () => {
    productPageState.isLoading = false;
    productPageState.isError = false;
    productPageState.error = null;
    productPageState.product = null
}