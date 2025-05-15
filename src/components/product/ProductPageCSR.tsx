/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import ProductImages from "./ProductImages";
import ProductDetails from './ProductDetails';
import { useProductPageStore } from '../../lib/store/product.store';
import Metadata from './Metadata';
import { useShopPageState } from '@/lib/store/shop.store';

const ProductPage = ({ id }: { id: number }) => {
    const { product, isLoading, isError, clearProduct, fetchProduct, setProduct } = useProductPageStore()
    const { fetchProductFromShop } = useShopPageState()
    useEffect(() => {
        if (!isLoading) {
            const cachedProduct = fetchProductFromShop(id)
            if (cachedProduct) {
                setProduct(cachedProduct)
            }
            else {
                clearProduct()
                fetchProduct(id);
            }
        }
        return () => { }
    }, [])

    return (
        <>{!isError ?
            <><Metadata seoTitle={product?.title as string} seoDescription={product?.description as string} />
                <article className="w-full flex items-start gap-x-7 gap-y-2 max-sm:flex-col">
                    <ProductImages product={product as ProductItemType} />
                    <ProductDetails product={product as ProductItemType} />
                </article>
            </>
            :
            <h1>404 - Product Not Found</h1>
        }</>
    )
}
export default ProductPage