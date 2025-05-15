
"use client"

import Link from "next/link"
import { clearProduct } from "@/lib/store/product.store"
import { Skeleton } from "@/components/ui/skeleton"
import ProductCardInfoSkeleton from "./ProductCardInfoSkeleton"

const ProductCardSkeleton = () => {
    return (
        <article className="relative shadow-sm transition-all duration-150 ease-linear rounded-[12px]
        flex flex-col items-center justify-start gap-y-1 pb-2 max-sm:pb-1.5
        bg-muted mx-1 h-full group">
            <Link onClick={(() => {
                clearProduct()
            })} className="w-full h-full relative" href={`#`}>
                <Skeleton
                    className="mx-auto w-[200-px] h-[200px] relative rounded-[12px] bg-muted-foreground opacity-60"
                />
                <ProductCardInfoSkeleton />
            </Link>
        </article>
    )
}



export default ProductCardSkeleton