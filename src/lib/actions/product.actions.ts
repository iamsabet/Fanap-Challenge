"use server"

export const paginateProducts = async ({ page = 1, limit = 20, sort = "title", order = "asc" }: PaginateProductProps) => {

    try {
        const skip = (page - 1) * limit
        const select = `id,title,price,rating,stock,images,thumbnail,meta,discountPercentage,category,description,tags`
        const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}&select=${select}`)
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
        return { data: data }
    } catch (e) {
        return { message: JSON.stringify(e), data: null }
    }
}