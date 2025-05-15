"use client"

import React from 'react'
import Image from 'next/image'
import { Skeleton } from '../ui/skeleton'

const ProductImages = ({ product }: { product: ProductItemType }) => {


    return (
        <div className={`mx-auto sm:w-[400px] sm:h-[400px] w-full h-auto rounded-md bg-transparent`}>
            {product?.thumbnail ? <Image
                className="aspect-square rounded-sm bg-card overflow-hidden object-contain mx-auto"
                src={product.thumbnail}
                alt={product.thumbnail + " Image "}
                width={400}
                height={400}
                loading='eager'
                decoding='async'
                priority
            />
                : <Skeleton className={`mx-auto w-[400px] h-[400px] rounded-md bg-sidebar-border`} />

            }
        </div>
    )
}

export default ProductImages