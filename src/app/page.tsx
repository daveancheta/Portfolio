"use client"

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HeroSection from "@/components/common/hero-section";
import ProjectSection from "@/components/common/project-section";
import TechStackSection from "@/components/common/tech-stack-section";
import AIAgent from "@/components/gemini/ai-agent";
import Squares from "@/components/Squares";
import { Button } from "@/components/ui/button";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import { MoveUp } from "lucide-react";
import { useTheme } from "next-themes";
import { use, useEffect, useRef, useState } from "react";


export default function Home() {
  const { theme } = useTheme();
  const topRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false);
  const scrollToTopRef = useRef<HTMLButtonElement>(null);

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

      <div ref={topRef}></div>

      <Header />

      <HeroSection />

      <ProjectSection />

      <TechStackSection />

      <AIAgent />

      <Footer />
    </div>
  );
}
