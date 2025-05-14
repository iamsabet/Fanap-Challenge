import React from 'react'
import RatingStars from '../RatingStars'

const ProductCardInfo = ({ rating, price, title }: { rating: number, price: number, title: string }) => {
    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-2 px-3">
            <div className="w-full flex justify-between items-center pt-1">
                <RatingStars rating={rating} />
                {/* Price Tag */}
                <span className="transition-all duration-200 ease-linear
        group-hover:-translate-y-0.5 text-[0.9rem] font-semibold rounded-md bg-foreground
        text-background px-2 py-0.5 group-hover:text-primary mb-1 max-sm:text-sm">{price} $</span>
            </div>
            <span className="w-full text-left group-hover:text-primary transition-colors duration-200 ease-linear">{title}</span>
        </div>
    )
}

export default ProductCardInfo