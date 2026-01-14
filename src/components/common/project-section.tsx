import { Highlighter } from "@/components/ui/highlighter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction, Link2 } from "lucide-react"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

function ProjectSection() {
  return ( 
    <section className="wrapper mt-20 text-2xl w-screen flex justify-center items-center flex-col">
        <h1>Project Section</h1>
        <span className="flex flex-row gap-1"><Construction className="animate-bounce size-10"/> under construction</span>
    </section>
  )
}

export default ProjectSection