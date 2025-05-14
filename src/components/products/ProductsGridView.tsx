import ProductCardItem from "./ProductCardItem";
const ProductsGridView = ({ data }: { data: GridViewProps }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { products, skip, total, limit } = data;
    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-4">
            <span className="flex items-center justify-center gap-x-2 text-xl font-semibold">{total}</span>
            <div className="w-full grid grid-cols-5 max-[1400px]:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-y-2 max-[502px]:flex max-[502px]:flex-col">
                {products.map((item) =>
                    <ProductCardItem key={"p-" + item.id} product={item} />
                )}
            </div>
        </div>
    )
}

export default ProductsGridView