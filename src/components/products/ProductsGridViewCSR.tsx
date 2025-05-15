/* eslint-disable react-hooks/exhaustive-deps */
"use client"
// import { useSnapshot } from "valtio";
import ProductCardItem from "./product-card/ProductCardItem";
import ProductCardSkeleton from "./product-card/ProductCardSkeleton";
// import { paginateProductsClientSide, shopPageState } from "@/lib/store/shop.store";
import { useEffect } from "react";
import Pagination from "./Pagination";
import { useShopPageState } from "@/lib/store/shop-z.store";

const ProductsGridViewCSR = ({ page = 1 }: { page: number }) => {
    // const { products: productsMap, total, isLoading } = useSnapshot(shopPageState);
    const { products: productsMap, total, isLoading, paginateProductsClientSide } = useShopPageState()
    useEffect(() => {
        if (!isLoading && !productsMap[page]) {
            paginateProductsClientSide({ page: page, limit: 24 });
        }
        return () => { }
    }, [])
    const products = productsMap[page]

    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-4">
            <h1 className="text-semibold text-center w-full flex items-center justify-center gap-x-2">
                <span className="flex items-center justify-center gap-x-2 font-semibold">{!products ? ". . ." : total}
                </span> Products
            </h1>
            <Pagination id={"first"} limit={24} csr={true} total={total} loaded={!!products} />
            <div className="w-full grid grid-cols-5 max-[1400px]:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-y-2 max-[502px]:flex max-[502px]:flex-col">
                {!products ? Array.from({ length: 24 }, (_, i) => i).map((i) =>
                    <ProductCardSkeleton key={"skeleton-" + i} />
                ) : products.map((item) =>
                    <ProductCardItem key={"p-" + item.id} product={JSON.parse(JSON.stringify(item))} csr={true} />
                )}
            </div>
            <Pagination id={"last"} limit={24} csr={true} total={total} loaded={!!products} />
        </div>
    )
}

export default ProductsGridViewCSR
