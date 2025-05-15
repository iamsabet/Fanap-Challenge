import ProductPageCSR from "@/components/product/ProductPageCSR";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fanap Challenge Product CSR",
    description: "Fanap Challenge Description",
};
export default async function product({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    return (
        <div className="w-full justify-start gap-y-6 pt-2 pb-4">
            <article className="box-size relative">
                <div className="w-full sm:px-2">
                    <div className="w-full block py-4">
                        <div className="px-0">
                            {isNaN(Number(id)) ? <h1>400 - WrongProduct Id</h1> :
                                <ProductPageCSR id={Number(id)} />
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}