import Link from "next/link"
import { ModeToggle } from "../mode-toggle"

function Header() {
    return (
        <header className='wrapper font-medium -tracking-widest text-5xl
    backdrop-blur shadow-accent text-black dark:text-white'>
            <div className="flex gap-2 items-center justify-between">
                <Link href='/'>HDA</Link>
                <div className="text-lg">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header