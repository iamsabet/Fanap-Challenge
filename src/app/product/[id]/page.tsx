import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fanap Challenge",
    description: "Fanap Challenge Description",
};
export default function product({ params }: { params: { id: string } }) {
    return (
        <div>{params.id}</div>
    )
}
