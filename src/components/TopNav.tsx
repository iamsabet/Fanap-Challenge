"use client"
import Logo from "./shared/Logo"
import Link from "next/link"
import ThemeButton from "./ThemeButton"
import { usePathname } from "next/navigation"
import { BiLogoGithub } from "react-icons/bi"
const TopNav = ({ theme }: { theme: string }) => {
    const pathname = usePathname()
    return (
        <nav className="fixed bg-card w-full flex items-center justify-center z-10">
            <div className="box-size w-full mx-auto flex items-center justify-between h-14">
                <Link href={pathname.split("csr").length > 1 ? "/csr" : "/"} className="flex items-center justify-start gap-x-2 group pl-2">
                    <Logo />
                    <span className="font-semibold group-hover:text-primary">
                        FANAP
                    </span>
                </Link>
                <div className="flex items-center justify-end gap-x-1 pr-1">
                    <ul className="flex items-center justify-center gap-x-1 h-full mt-0.5">
                        <Link href="/" className="flex items-center justify-start gap-x-2 group pl-2">
                            <div className={`font-semibold group-hover:text-primary ${pathname.split("csr").length === 1 ? "text-primary" : ""}`}><span>SSR</span></div>
                        </Link>
                        <Link href="/csr" className={`flex items-center justify-start gap-x-2 group pl-2`}>
                            <div className={`font-semibold group-hover:text-primary ${pathname.split("csr").length > 1 ? "text-primary" : ""}`}><span>CSR</span></div>
                        </Link>
                    </ul>
                    <ThemeButton initTheme={theme} />
                    <Link target="_blank" href="https://github.com/iamsabet/Fanap-Challenge" className="px-0 text-[1.82rem] hover:text-primary"><BiLogoGithub /></Link>
                </div>
            </div>
        </nav>
    )
}

export default TopNav