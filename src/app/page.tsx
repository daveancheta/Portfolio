"use client"

import Header from "@/components/common/header";
import Squares from "@/components/Squares";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="relative w-screen h-screen">

      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor={cn(theme === 'dark' || theme === 'dark' ? 'white' : 'black')}
        />
      </div>

      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 -z-10"></div>

      <Header />
    </div>
  );
}
