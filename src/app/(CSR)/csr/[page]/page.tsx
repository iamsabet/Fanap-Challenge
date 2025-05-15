import ProductsGridViewCSR from "@/components/products/ProductsGridViewCSR";
// import { paginateProducts } from "@/lib/actions/product.actions";
import { Metadata } from "next";

// import Image from "next/image";
export const metadata: Metadata = {
  title: "Fanap Challenge CSR",
  description: "Fanap Challenge Description",
};
export default async function Home({ params }: { params: Promise<{ page: number }> }) {

  const { page } = await params;

  return (
    <div className="w-full box-size flex flex-col items-start justify-start h-auto py-4 gap-y-2">
      <ProductsGridViewCSR page={page} />
    </div>
  );
}

