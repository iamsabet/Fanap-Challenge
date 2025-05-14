/* eslint-disable @typescript-eslint/no-unused-vars */
interface PaginateProductProps {
    page: number
    limit: number,
    sort?: "title" | "price" | "rating",
    order?: "asc" | "des"
}

interface FetchProductProps {
    id: number
}