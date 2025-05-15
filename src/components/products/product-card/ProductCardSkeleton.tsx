import { Skeleton } from "@/components/ui/skeleton"
import ProductCardInfoSkeleton from "./ProductCardInfoSkeleton"

const ProductCardSkeleton = () => {
    return (
        <article className="relative shadow-sm transition-all duration-150 ease-linear rounded-[12px]
        flex flex-col items-center justify-start gap-y-1 pb-2 max-sm:pb-1.5
        bg-muted mx-1 h-full group">
            <div className="w-full h-full relative">
                <Skeleton
                    className="mx-auto w-[200-px] h-[200px] relative rounded-[12px] bg-muted-foreground opacity-70"
                />
                <ProductCardInfoSkeleton />
            </div>
        </article>
    )
}



export default ProductCardSkeleton