import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { FolderKanban } from "lucide-react"
import { motion } from "motion/react"

type Project = {
  id: number
  title: string
  imgUrl: string
  description: string
  stack: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "ReQuake",
    imgUrl: "/requake.png",
    description:
      "Real-time earthquake monitoring for the Philippines, visualizing seismic activity on an interactive map to improve public awareness and safety.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    link: "https://requake.vercel.app/",
  },
  {
    id: 2,
    title: "Grindax",
    imgUrl: "/grindax.png",
    description:
      "A full-stack movie collection platform with TMDB integration, user authentication, and a responsive, shadcn/ui-powered interface.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    link: "https://grindax.vercel.app/",
  },
  {
    id: 3,
    title: "CarVibe",
    imgUrl: "/carvibe.png",
    description:
      "Role-based car rental system with booking, driver assignment, rental tracking, and comprehensive admin tools built on Laravel.",
    stack: ["Laravel", "Blade", "Tailwind", "MySQL"],
    link: "https://github.com/daveancheta/Car-Rental-System-Laravel",
  },
  {
    id: 4,
    title: "SitterLy",
    imgUrl: "/sitterly.png",
    description:
      "SaaS platform connecting parents with available babysitters, featuring bookings, secure online payments, and commission-based revenue.",
    stack: ["Laravel", "React", "TypeScript", "Tailwind", "MySQL"],
    link: "https://github.com/daveancheta/Babysitter-Booking-System",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function ProjectSection() {
  return (
    <section className="wrapper py-12 sm:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={sectionVariants}
        className="flex flex-col gap-3"
      >
        <h2 className="flex items-center gap-2 text-2xl sm:text-4xl font-semibold tracking-tight">
          <FolderKanban className="sm:size-8 size-5 text-muted-foreground" />
          <span>Recent Projects</span>
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
          A curated selection of products I&apos;ve designed and built end-to-end, from data modeling and backend
          integrations to polished, production-ready UI.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${project.title} project in a new tab`}
          >
            <motion.article
              className="group h-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={cardVariants}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs font-medium sm:text-[0.8rem]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection