import Link from "next/link"
import { ModeToggle } from "../mode-toggle"

function Header() {
    return (
        <header className='wrapper font-bold -tracking-widest sm:text-5xl text-2xl
    backdrop-blur shadow-accent'>
            <div className="flex gap-2 items-center justify-between">
                <Link className="" href='/'>HDA</Link>
                <div className="text-lg">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header