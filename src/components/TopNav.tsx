"use client"
import Logo from "./shared/Logo"
import Link from "next/link"
import ThemeButton from "./ThemeButton"
import { usePathname } from "next/navigation"
const TopNav = ({ theme }: { theme: string }) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="fixed bg-card w-full flex items-center justify-center z-10">
            <div className="box-size w-full mx-auto flex items-center justify-between h-14">
                <Link href="/" className="flex items-center justify-start gap-x-2 group pl-2">
                    <Logo />
                    <div className="font-semibold group-hover:text-primary">
                        <span className="max-sm:hidden">Fanap Challenge</span>
                        <span className="sm:hidden">Fanap </span>
                    </div>
                </Link>
                <div className="flex items-center justify-end gap-x-2 pr-1">
                    <ul className="flex items-center justify-center gap-x-2 h-full mt-0.5">
                        <Link href="/" className="flex items-center justify-start gap-x-2 group pl-2">
                            <div className={`font-semibold group-hover:text-primary ${pathname.split("csr").length === 1 ? "text-primary" : ""}`}><span>SSR</span></div>
                        </Link>
                        <Link href="/csr" className={`flex items-center justify-start gap-x-2 group pl-2`}>
                            <div className={`font-semibold group-hover:text-primary ${pathname.split("csr").length > 1 ? "text-primary" : ""}`}><span>CSR</span></div>
                        </Link>
                    </ul>
                    <ThemeButton initTheme={theme} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav