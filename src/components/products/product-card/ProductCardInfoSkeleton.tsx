import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductCardInfoSkeleton = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-2 px-3 max-sm:px-2">
            <div className="w-full flex justify-between items-center pt-2">
                <Skeleton className="w-1/2 h-6 mr-auto bg-muted-foreground opacity-70" />
                <Skeleton className="w-1/5 h-6 mr-auto bg-muted-foreground opacity-70" />
            </div>
            <Skeleton className="w-4/5 h-6 mr-auto bg-muted-foreground opacity-70" />
        </div>
    )
}

export default ProductCardInfoSkeleton