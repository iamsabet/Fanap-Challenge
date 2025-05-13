
import Logo from "./shared/Logo"
import Link from "next/link"
import ThemeButton from "./ThemeButton"
const TopNav = ({ theme }: { theme: string }) => {
    return (
        <nav className="bg-card w-full flex items-center justify-center">
            <div className="box-size w-full mx-auto flex items-center justify-between h-16">
                <div className="flex items-center justify-start gap-x-2">
                    <Logo />
                    <Link href="/" className="font-semibold hover:text-primary"><em>Fanap Challenge</em></Link>
                </div>
                <div className="flex items-center justify-end gap-x-2">
                    <ThemeButton initTheme={theme} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav