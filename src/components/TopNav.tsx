
import Logo from "./shared/Logo"
import Link from "next/link"
import ThemeButton from "./ThemeButton"
const TopNav = ({ theme }: { theme: string }) => {
    return (
        <nav className="fixed bg-card w-full flex items-center justify-center z-10">
            <div className="box-size w-full mx-auto flex items-center justify-between h-16">
                <Link href="/" className="flex items-center justify-start gap-x-2 group pl-2">
                    <Logo />
                    <div className="font-semibold group-hover:text-primary"><span>Fanap Challenge</span></div>
                </Link>
                <div className="flex items-center justify-end gap-x-2 pr-1">
                    <ThemeButton initTheme={theme} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav