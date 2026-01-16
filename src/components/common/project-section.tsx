import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FolderKanban } from "lucide-react";

function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Grindax",
      imgUrl: "/grindax.png",
      description: "A full-stack movie collection management app built with Next.js, TypeScript, Prisma, and Clerk. Features TMDB API integration for automatic movie data enrichment, user authentication, and a beautiful responsive UI built with shadcn/ui and Tailwind CSS.",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma",],
      link: "https://grindax.vercel.app/"
    },
    {
      id: 2,
      title: "CarVibe",
      imgUrl: "/carvibe.png",
      description: "A role-based Car Rental System built with Laravel and Blade, supporting renters, drivers, and administrators, featuring vehicle booking, driver assignment, rental tracking, and comprehensive administrative management tools.",
      stack: ["Laravel", "Blade", "Tailwind", "MySQL"],
      link: "https://github.com/daveancheta/Car-Rental-System-Laravel"
    },
    {
      id: 3,
      title: "SitterLy",
      imgUrl: "/sitterly.png",
      description: "SitteryLy – A SaaS platform that connects parents with available babysitters. Parents can browse and hire babysitters, while babysitters can post their availability. The system includes a secure online payment center, and the platform owner earns a 5% commission from each successful transaction.",
      stack: ["Laravel", "React", "TypeScript", "Tailwind", "MySQL"],
      link: "https://github.com/daveancheta/Babysitter-Booking-System"
    }
  ];

  return (
    <section className="wrapper mt-20">
      <h1 className="sm:text-4xl text-2xl font-bold flex items-center gap-2">
        <FolderKanban className="text-muted-foreground sm:size-10 size-5"/>Recent Projects
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-6">
        {projects.map((p) =>
          <Link href={p.link} key={p.id} className="cursor-none" target="_blank">
            <div className="bg-white dark:bg-black p-5 border-3 rounded-lg min-h-150 max-h-150 space-y-4 
            transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-101">
              <img className="rounded-lg" src={p.imgUrl} alt="" />
              <div className="p-4 flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((stack) =>
                    <Badge variant="secondary" className="p-2 rounded-lg" key={stack}>{stack}</Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold">{p.title}</h1>
                <p className="text-base text-muted-foreground">{p.description}</p>
              </div>
            </div>
          </Link>
        )}
      </div>

    </section>
  )
}

export default ProjectSection