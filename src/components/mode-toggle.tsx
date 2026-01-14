import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div>{theme !== "light" ?
      <button className="cursor-none"
        onClick={() => setTheme('light')}>
        <Sun className="text-yellow-500" />
      </button> :
      <button className="cursor-none"
        onClick={() => setTheme('dark')}>
        <Moon className="text-gray-800" />
      </button>}


    </div>
  )
}
