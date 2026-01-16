import { Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import LogoLoop from "../LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJamstack, SiJavascript, SiPostgresql, SiMongodb, SiNodedotjs, SiExpress, SiLaravel, SiCodeigniter, SiJsonwebtokens, SiMysql, SiSqlite, SiPrisma, SiVercel, SiRailway } from 'react-icons/si';
import { useIsMobile } from "@/app/hooks/use-mobiel";


function TechStackSection() {
    const isMobile = useIsMobile()

    const stack = [
        {
            id: 1,
            frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Styled Components"],
            backend: ["Node.js", "Express", "Laravel", "CodeIgniter", "JWT", "REST"],
            database: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
            orm: ["Prisma", "Eloquent"],
            deployment: ["Vercel", "Railway", "Neon"],
            devTools: ["Git", "Github", "VS Code", "Cursor", "Discord"]
        }
    ]

    const techLogos = [
        { node: <SiJavascript /> },
        { node: <SiTypescript /> },
        { node: <SiReact /> },
        { node: <SiNextdotjs /> },
        { node: <SiTailwindcss /> },
        { node: <SiNodedotjs /> },
        { node: <SiExpress /> },
        { node: <SiLaravel /> },
        { node: <SiCodeigniter /> },
        { node: <SiJsonwebtokens /> },
        { node: <SiPostgresql /> },
        { node: <SiMongodb /> },
        { node: <SiMysql /> },
        { node: <SiSqlite /> },
        { node: <SiPrisma /> },
        { node: <SiVercel /> },
        { node: <SiRailway /> },
    ];

    return (
        <section className="mt-10">
            <div className="wrapper">
                <h1 className="sm:text-4xl text-2xl font-bold flex items-center gap-2">
                    <Layers className="text-muted-foreground sm:size-10 size-5" />
                    Tech Stack
                </h1>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div>
                        <p className="text-xl font-semibold">Frontend</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.frontend.map((frontend) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={frontend} variant="outline">
                                            {frontend}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>

                    {/* Backend */}
                    <div>
                        <p className="text-xl font-semibold">Backend</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.backend.map((backend) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={backend} variant="outline">
                                            {backend}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>

                    {/* Database */}
                    <div>
                        <p className="text-xl font-semibold">Database</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.database.map((database) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={database} variant="outline">
                                            {database}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>

                    {/* ORM */}
                    <div>
                        <p className="text-xl font-semibold">ORM</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.orm.map((orm) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={orm} variant="outline">
                                            {orm}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>

                    {/* deployment */}
                    <div>
                        <p className="text-xl font-semibold">Deployment</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.deployment.map((deployment) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={deployment} variant="outline">
                                            {deployment}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>

                    {/* Developer Tools */}
                    <div>
                        <p className="text-xl font-semibold">Developer Tools</p>
                        {stack.map((stack) =>
                            <div key={stack.id}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.devTools.map((devTools) =>
                                        <Badge className="text-md border text-black dark:bg-black dark:text-white 
                                rounded-sm" key={devTools} variant="outline">
                                            {devTools}
                                        </Badge>)}
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>

            <LogoLoop
                className="mt-8"
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={isMobile ? 30 : 45}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </section>
    )
}

export default TechStackSection