"use server"

export const paginateProducts = async ({ page = 1, limit = 20, sort = "title", order = "asc" }: PaginateProductProps) => {

    try {
        const skip = (page - 1) * limit
        const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}&select=title,price,rating,stock,images,thumbnail,meta,discountPercentage,category`)
            .then((item) => item.json())
        return data
    } catch (e) {
        return { message: e, products: null }
    }
}

export const fetchProduct = async ({ id }: FetchProductProps) => {

    try {
        const data = await fetch(`https://dummyjson.com/products/${id}`)
        return data
    } catch (e) {
        return { message: e }
    }
}