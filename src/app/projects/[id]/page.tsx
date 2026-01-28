import { MoveLeft } from "lucide-react"
import Link from "next/link"

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
        link: "",
    },
    {
        id: 4,
        title: "SitterLy",
        imgUrl: "/sitterly.png",
        description:
            "SaaS platform connecting parents with available babysitters, featuring bookings, secure online payments, and commission-based revenue.",
        stack: ["Laravel", "React", "TypeScript", "Tailwind", "MySQL"],
        link: "",
    },
]

async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((project) => project.id === Number(id))

    return (
        <div className="wrapper">
            <Link href="/" className="flex flex-row items-center gap-2 text-muted-foreground">
                <MoveLeft />
                Back to Home
            </Link>
        </div>
    )
}

export default page