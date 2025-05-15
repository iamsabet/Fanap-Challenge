import { proxy } from "valtio"

type ShopPageState = {
    products: { [key: number]: ProductItemType[] },
    total: number,
    isLoading: boolean
    isError: boolean
    error: Error | null
}

export const shopPageState = proxy<ShopPageState>({
    products: {},
    total: 0,
    isLoading: false,
    isError: false,
    error: null,

})

export const paginateProductsClientSide = async ({ page = 1, limit = 24 }: PaginateProductProps) => {
    if (shopPageState.products[page]) {
        // shopPageState.products[page]
        return
    }
    // shopPageState.products = {}
    shopPageState.isLoading = true
    shopPageState.isError = false
    shopPageState.error = null
    try {
        const skip = (page - 1) * limit
        const select = `id,title,price,rating,stock,images,thumbnail,meta,discountPercentage,category,description,tags`
        const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`)
        if (!data.ok) {
            shopPageState.isError = true
            shopPageState.isLoading = false
            throw new Error('Network response was not ok')
        }
        const products = await data.json()
        shopPageState.products[page] = products.products
        shopPageState.total = products.total
        shopPageState.isLoading = false
    } catch (error) {
        shopPageState.isError = true
        shopPageState.error = error as Error
        shopPageState.isLoading = false
    }
}
export const clearShopData = async () => {
    shopPageState.isLoading = false
    shopPageState.isError = false
    shopPageState.error = null
    shopPageState.products = []
}