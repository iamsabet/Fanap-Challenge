import ProductPage from "@/components/product/ProductPage";
import { fetchProduct } from "@/lib/actions/product.actions";
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const { id } = await params
    // fetch data
    const { data, message } = await fetchProduct({ id: Number(id) });
    // optionally access and extend (rather than replace) parent metadata

    return data ? {
        title: data.title,
        description: data.description,
        openGraph: {
            images: [data.thumbnail],
        },
    } : {
        title: "Not Found",
        description: message
    }
}
export default async function product({ params }: { params: Promise<{ id: string }> }) {
    // read route params
    const { id } = await params;
    // fetch data
    const product = await fetchProduct({ id: Number(id) });
    return (
        <div className="w-full justify-start gap-y-6 pt-2 pb-4">
            <article className="box-size relative">
                <div className="w-full sm:px-2">
                    <div className="w-full block py-4">
                        <div className="px-0">
                            {isNaN(Number(id)) ? <h1>400 - WrongProduct Id</h1> :
                                <ProductPage product={!product.message ? product.data : null} />
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}