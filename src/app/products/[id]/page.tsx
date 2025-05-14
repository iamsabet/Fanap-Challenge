import ProductPage from "@/components/product/ProductPage";
// import { fetchProduct } from "@/lib/actions/product.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fanap Challenge",
    description: "Fanap Challenge Description",
};
export default async function product({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    // const product = await fetchProduct({ id });
    return (
        <div className="w-full justify-start gap-y-6 pt-2 pb-4">
            <article className="box-size relative">
                <div className="w-full sm:px-2">
                    <div className="w-full block py-4">
                        <div className="px-0">
                            {isNaN(Number(id)) ? <h1>400 - WrongProduct Id</h1> :
                                <ProductPage id={Number(id)} />
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}