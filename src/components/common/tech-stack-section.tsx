import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiCodeigniter,
  SiJsonwebtokens,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiVercel,
  SiRailway,
  SiFigma,
} from "react-icons/si";
import { useIsMobile } from "@/app/hooks/use-mobiel";
import { motion } from "motion/react";

function TechStackSection() {
  const isMobile = useIsMobile();

  const stack = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Styled Components",
    ],
    backend: ["Node.js", "Express", "Laravel", "CodeIgniter", "JWT", "REST"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    orm: ["Prisma", "Eloquent"],
    deployment: ["Vercel", "Railway", "Neon"],
    devTools: ["Git", "Github", "VS Code", "Figma", "Discord"],
  } as const;

  type CategoryKey = keyof typeof stack;

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "orm", label: "ORM" },
    { key: "deployment", label: "Deployment" },
    { key: "devTools", label: "Developer Tools" },
  ];

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
    { node: <SiFigma /> },
  ];

  return (
    <section
      id="tech-stack"
      className="wrapper"
      aria-labelledby="tech-stack-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
            Skills &amp; Tools
          </p>

          <h2
            id="tech-stack-heading"
            className="mt-3 flex items-center gap-2 text-2xl font-bold sm:text-4xl"
          >
            <Layers className="size-5 text-muted-foreground sm:size-8" />
            Tech Stack
          </h2>

          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A curated set of technologies I use to design, build, and ship
            modern, scalable web applications—from polished user interfaces to
            reliable backend services and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-muted/40 p-6 sm:grid-cols-2 sm:p-8">
          {categories.map((category) => (
            <div key={category.key} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack[category.key].map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-sm border bg-background/70 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur sm:text-sm"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <LogoLoop
          className="mt-2"
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={isMobile ? 30 : 45}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners and tools I work with"
        />
      </motion.div>
    </section>
  );
}

export default TechStackSection;