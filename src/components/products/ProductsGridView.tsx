"use client"

import Pagination from "./Pagination";
import ProductCardItem from "./product-card/ProductCardItem";
const ProductsGridView = ({ data }: { data: GridViewProps }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { products, skip, total, limit } = data;
    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-4">
            <h1 className="text-semibold text-center w-full"> List of {total} Products </h1>
            <Pagination id={"first"} limit={24} csr={false} total={total} loaded={!!products} />
            <div className="w-full grid grid-cols-5 max-[1400px]:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-y-2 max-[502px]:flex max-[502px]:flex-col">
                {products.map((item) =>
                    <ProductCardItem key={"p-" + item.id} product={item} />
                )}
            </div>
            <Pagination id={"last"} limit={24} csr={false} total={total} loaded={!!products} />
        </div>
    )
}

export default ProductsGridView