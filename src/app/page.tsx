"use client"

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HeroSection from "@/components/common/hero-section";
import ProjectSection from "@/components/common/project-section";
import TechStackSection from "@/components/common/tech-stack-section";
import Squares from "@/components/Squares";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="relative w-screen min-h-screen cursor-none">
      <div className="z-20 hidden sm:flex">
        <SmoothCursor />
      </div>

      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor={cn(theme === 'dark' ? 'white' : 'black')}
        />
      </div>

      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 -z-5"></div>

      <Header />

      <HeroSection />

      <ProjectSection />

      <TechStackSection />

      <Footer />
    </div>
  );
}
