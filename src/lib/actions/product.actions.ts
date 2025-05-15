/* eslint-disable @typescript-eslint/no-unused-vars */

export const paginateProducts = async ({ page = 1, limit = 24, sort = "title", order = "desc" }: PaginateProductProps) => {

    try {
        const skip = (page - 1) * limit
        const select = `id,title,price,rating,stock,images,thumbnail,meta,discountPercentage,category,description,tags`
        const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`)
            .then((item) => item.json())
        return data
    } catch (e) {
        return { message: e, products: null }
    }
}

export const fetchProduct = async ({ id }: FetchProductProps): Promise<{ data: ProductItemType | null, message?: string }> => {

    try {
        const data = await fetch(`https://dummyjson.com/products/${id}`)
            .then((item) => item.json())
        if (data.message) {
            return { ...data, data: null }
        }
        return { data }
    } catch (e) {
        return { message: JSON.stringify(e), data: null }
    }
}