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
    const selectedPage = (pathname === "/csr") || (pathname === "/") ? 1 : pagePathname

    const totalPages = Math.ceil(total / limit);

    const pageLinks = Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        return (
            <li key={`${id}-${pageNumber} mx-1 py-2`}>
                <Link prefetch={true} className={`rounded-[6px] bg-card p-2.5 text-lg hover:text-primary
                    ${(pageNumber === selectedPage) ? "text-primary" : ""}`} href={`${csr ? "/csr" : ""}/${pageNumber}`}>{pageNumber}</Link>
            </li>
        );
    });

    return (
        <div className="flex w-full h-auto items-center justify-center py-4">{!loaded
            ? <Skeleton className="h-6" />
            : <ul className="p-0 m-0 w-full flex flex-wrap items-center justify-center gap-x-1 gap-y-2">{pageLinks}</ul>}
        </div>
    )
}
export default Pagination