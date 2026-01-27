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

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    if (show) {
      scrollToTopRef.current?.classList.remove("hidden");

      setTimeout(() => {
        scrollToTopRef.current?.classList.remove("opacity-0", "scale-0");
        scrollToTopRef.current?.classList.add("opacity-100", "scale-100");
      }, 100)
    } else {
      scrollToTopRef.current?.classList.remove("opacity-100", "scale-100");
      scrollToTopRef.current?.classList.add("opacity-0", "scale-0");

      setTimeout(() => {
        scrollToTopRef.current?.classList.add("hidden");
      }, 300)
    }
  })

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

      <div className="fixed bottom-10 sm:left-10 right-5 sm:flex sm:justify-center">
        <Button ref={scrollToTopRef} variant="outline"
          className="hidden transition-all duration-300 
        ease-in-out opacity-0 scale-0 origin z-25 cursor-none" onClick={scrollToTop}>
          <MoveUp />
        </Button>
      </div>

      <ProjectSection />

      <TechStackSection />

      <AIAgent />

      <Footer />
    </div>
  );
}
