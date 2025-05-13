import { Metadata } from "next";

// import Image from "next/image";
export const metadata: Metadata = {
  title: "Fanap Challenge",
  description: "Fanap Challenge Description",
};
export default function Home() {
  return (
    <div className="w-full box-size flex flex-col items-start justify-start h-auto py-4">
      <h1 className="text-semibold"> Hello World From the Fanap Next.js Front-End Challenge</h1>
    </div>
  );
}

