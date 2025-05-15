"use client"

import { productPageState } from '@/lib/store/product.store';
import React from 'react'
import { useSnapshot } from 'valtio';
import { Skeleton } from '../ui/skeleton';
import CategoryBadge from '../products/product-card/CategoryBadge';
import RatingSingleIcon from '../products/product-card/RatingSingleIcon';
import RatingStars from '../products/product-card/RatingStars';

const ProductDetails = ({ pr }: { pr?: ProductItemType }) => {
    const { product: storeProduct } = useSnapshot(productPageState);
    const product = pr || storeProduct
    return (
        <div className="flex-1 w-full flex flex-col items-start justify-start gap-y-2 px-2">

            {!product?.title ? <div className='w-full flex flex-col gap-y-4 pt-1'>
                <Skeleton className='h-8 w-3/5 bg-sidebar-border rounded-sm' />
                <Skeleton className='h-6 w-1/6 bg-sidebar-border rounded-sm' />
                <Skeleton className='h-7 w-1/4 bg-sidebar-border rounded-sm' />
                <Skeleton className='h-6 w-1/6 bg-sidebar-border rounded-sm' />
                <Skeleton className='h-6 w-2/5 bg-sidebar-border rounded-sm' />
                {/* <div className='h-0.5' /> */}
                <div className='flex flex-col gap-y-2'>
                    <Skeleton className='h-5 w-9/10 bg-sidebar-border rounded-sm' />
                    <Skeleton className='h-5 w-8/10 bg-sidebar-border rounded-sm' />
                    <Skeleton className='h-5 w-3/4 bg-sidebar-border rounded-sm' />
                </div>
            </div> :
                <div className='w-full flex flex-col items-start gap-y-4 justify-start'>

                    <h1 className=''>{product?.title} </h1>
                    <div className='flex items-center justify-start gap-x-3'>
                        <CategoryBadge position='relative' category={product.category} />
                    </div>

                    <div className="w-full flex justify-start items-center pt-0 gap-x-3">
                        {/* Price Tag */}
                        <span className="text-base font-semibold rounded-md
                            bg-foreground text-background px-2 py-0.5">{product.price} $</span>
                        {product.discountPercentage ? <span className="text-base font-semibold rounded-md
                            bg-primary text-white px-2 py-0.5">{product.discountPercentage} %</span>
                            : <></>
                        }
                    </div>
                    <div className="w-full flex justify-start items-center pt-0 gap-x-3">
                        <span className='text-base'>Stock : <em className='text-primary'>{product.stock}</em></span>
                    </div>
                    <div className="w-full flex justify-start items-center pt-0 gap-x-4">
                        <span className='font-semibold'>Rating</span>
                        <RatingSingleIcon position='relative' rating={product.rating} />
                        <div className='mt-1 scale-125 ml-3'><RatingStars rating={product.rating} /></div>
                    </div>
                    <p className='w-full'>{product.description}</p>
                </div>
            }
        </div>
    )
}

export default ProductDetails