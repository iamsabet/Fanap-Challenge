/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect } from 'react';
import ProductImages from "./ProductImages";
import { useSnapshot } from 'valtio/react';
import { clearProduct, fetchProduct, productPageState } from '@/lib/store/product.store';
import ProductDetails from './ProductDetails';

const ProductPage = ({ id }: { id: number }) => {
    const { isLoading, isError } = useSnapshot(productPageState);

    useEffect(() => {
        if (!isLoading) {
            clearProduct()
            fetchProduct(id);
        }
        return () => { }
    }, [])

    return (
        <>{!isError ?
            <article className="w-full flex items-start gap-x-7 gap-y-2 max-sm:flex-col">
                <ProductImages />
                <ProductDetails />
            </article>
            :
            <h1>404 - Product Not Found</h1>
        }</>
    )
}
export default ProductPage