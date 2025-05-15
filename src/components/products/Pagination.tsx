"use client"

import { usePathname } from "next/navigation";
import { Skeleton } from "../ui/skeleton"
import Link from "next/link";

const Pagination = ({
    id = "first",
    total, limit,
    csr = false,
    loaded = false
}: {
    id?: string,
    total: number,
    limit: number,
    csr: boolean,
    loaded: boolean
}) => {
    const pathname = usePathname()
    const pagePathname = parseInt(pathname.split("/").pop() as string)
    const totalPages = Math.ceil(total / limit);

    const pageLinks = Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
            <li key={`${id}-${pageNumber}`}>
                <Link prefetch={true} className={`mx-1 rounded-sm bg-card p-2 text-lg hover:text-primary
                    ${pageNumber === pagePathname ? "text-primary" : ""}`} href={`${csr ? "/csr" : ""}/${pageNumber}`}>{pageNumber}</Link>
            </li>
        );
    });

    return (
        <div className="flex w-full h-8 items-center justify-center">{!loaded
            ? <Skeleton className="h-6" />
            : <ul className="p-0 m-0 w-full flex flex-wrap items-center justify-center gap-1">{pageLinks}</ul>}
        </div>
    )
}
export default Pagination