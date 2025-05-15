/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import ProductImages from "./ProductImages";
import ProductDetails from './ProductDetails';

const ProductPage = ({ product }: { product: ProductItemType | null }) => {
    // console.log(product)
    return (
        <>{product ?
            <article className="w-full flex items-start gap-x-7 gap-y-2 max-sm:flex-col">
                <ProductImages product={product} />
                <ProductDetails product={product} />
            </article>
            :
            <h1>404 - Product Not Found</h1>
        }</>
    )
}
export default ProductPage