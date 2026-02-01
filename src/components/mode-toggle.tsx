"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="rounded-full p-1 bg-transparent
     border border-primary/30 flex flex-row justify-center items-center gap-1">
      <button className={cn("cursor-none rounded-full p-1",
        theme === 'light' && "bg-gray-600"
      )}
        onClick={() => setTheme('light')}>
        <Sun className="size-4 text-white" />
      </button>
      <button className={cn("cursor-none rounded-full p-1",
        theme === 'dark' && "bg-gray-600/50"
      )}
        onClick={() => setTheme('dark')}>
        <Moon className="size-4 fill-white" />
      </button>
    </div>
  )
}
