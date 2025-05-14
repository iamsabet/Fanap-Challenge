
"use client"

import Image from "next/image"
import Link from "next/link"
import CategoryBadge from "./CategoryBadge"
import RatingSingleIcon from "./RatingSingleIcon"
import ProductCardInfo from "./product-card/ProductCardInfo"
import { clearProduct } from "@/app/store/product.store"

const ProductCardItem = ({ product }: { product: ProductItemType }) => {
    return (
        <article className="relative shadow-sm transition-all duration-150 ease-linear rounded-sm
        flex flex-col items-center justify-start gap-y-1 pb-2 max-sm:pb-1.5
        bg-muted mx-1 h-full group">
            <Link onClick={(() => {
                clearProduct()
            })} className="w-full h-full relative" href={`/products/${product.id}`}>
                <CategoryBadge category={product.category} />
                {/* Rating Icon Based on Rating value 3 types */}
                <RatingSingleIcon rating={product.rating} />
                <Image
                    className="mx-auto relative group-hover:scale-105 transition-transform duration-150 ease-linear"
                    src={product.thumbnail}
                    alt={product.title + " Thumbnail"}
                    width={200}
                    height={200}
                    loading='lazy'
                />
                <ProductCardInfo {...product} />
            </Link>
        </article>
    )
}



export default ProductCardItem