/* eslint-disable @typescript-eslint/no-unused-vars */
interface ProductItemType {
    id: number,
    title: string,
    price: number,
    rating: number,
    stock: number,
    images: string[],
    thumbnail: string,
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    },
    discountPercentage: number,
    category: string
}
interface GridViewProps {
    products: ProductItemType[],
    total: number,
    skip: number,
    limit: number
}