/* eslint-disable @typescript-eslint/no-unused-vars */
interface PaginateProductProps {
    page: number
    limit: number,
    sort?: "title" | "price" | "rating",
    order?: "asc" | "desc"
}

interface FetchProductProps {
    id: number
}