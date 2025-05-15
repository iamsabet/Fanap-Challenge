import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductCardInfoSkeleton = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-2 px-3 max-sm:px-2">
            <div className="w-full flex justify-evenly items-center pt-1.5">
                <Skeleton className="w-1/2 h-5 mr-auto bg-muted-foreground opacity-70" />
                <div className='flex-1' />
                <Skeleton className="mt-1 w-[30%] h-6 mr-auto bg-muted-foreground opacity-70" />
            </div>
            <Skeleton className="w-4/5 h-6 mr-auto bg-muted-foreground opacity-70" />
        </div>
    )
}

export default ProductCardInfoSkeleton