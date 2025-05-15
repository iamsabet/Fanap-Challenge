import ProductsGridView from "@/components/products/ProductsGridView";
import { paginateProducts } from "@/lib/actions/product.actions";
import { Metadata } from "next";

// import Image from "next/image";
export const metadata: Metadata = {
  title: "Fanap Challenge SSR",
  description: "Fanap Challenge Description",
};
export default async function Home() {

  const data = await paginateProducts({ page: 1, limit: 24 })

  return (
    <div className="w-full box-size flex flex-col items-start justify-start h-auto py-4 gap-y-2">
      {data.products ? <ProductsGridView data={data} /> : <></>}
    </div>
  );
}

