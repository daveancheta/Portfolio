"use client";

import Squares from "@/components/Squares";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { use } from "react";

type Project = {
    id: number
    title: string
    imgUrl: string
    problem: string
    solution: string
    type: string
};

const projects: Project[] = [
    {
        id: 1,
        title: "ReQuake",
        imgUrl: "/requake.png",
        problem: "Many people rely on social media or delayed news updates to know when an earthquake has occurred. This can cause confusion, misinformation, and slow response times, especially for communities that need quick and reliable updates to stay safe and aware of seismic activity in their area.",
        solution: "ReQuake provides an easy-to-use web platform that displays real-time earthquake data in a clear and organized way. It allows users to quickly monitor recent seismic events, view affected locations, and stay informed without relying on scattered or unreliable sources. This helps the community stay aware, prepared, and responsive during earthquake situations.",
        type: "Personal Project",
    },
    {
        id: 2,
        title: "Grindax",
        imgUrl: "/grindax.png",
        problem: "Movie lovers often struggle to keep track of the films they’ve already watched or the ones they plan to watch. Lists are usually scattered across notes, screenshots, or different apps, making it inconvenient to manage personal movie collections and share recommendations within the community.",
        solution: "Grindax provides a simple platform where users can list their favorite movies, mark films they’ve already watched, and organize their watchlist in one place. By centralizing movie tracking, Grindax helps the community easily manage their viewing history, discover favorites, and share movie interests with others.",
        type: "Personal Project",
    },
    {
        id: 3,
        title: "CarVibe",
        imgUrl: "/carvibe.png",
        problem: "Managing rented cars can be confusing when there is no centralized system for tracking bookings, drivers, and vehicle status. Renters lack visibility into their rentals, drivers have no clear assignment tracking, and admins struggle to monitor active rentals, availability, and overall operations efficiently.",
        solution: "CarVibe is a web-based car rental management system designed to support three user roles: renters, drivers, and administrators. It allows renters to track their bookings, drivers to view assigned trips, and admins to manage vehicles, rentals, and users in one centralized platform. This simplifies car rental operations and ensures clear coordination between all users involved.",
        type: "Personal Project",
    },
    {
        id: 4,
        title: "SitterLy",
        imgUrl: "/sitterly.png",
        problem: "Parents often struggle to find reliable babysitters online because information is scattered across social media and different platforms. Babysitters have no centralized place to advertise their services, and managing bookings or payments is cumbersome without a proper system.",
        solution: "SitterLy is a SaaS platform where parents can browse and hire babysitters easily, and babysitters can post their profiles with a “Hire Me” option. The platform centralizes service listings, allows secure online payments through PayMongo, and streamlines communication between parents and babysitters, making the process organized and reliable.",
        type: "Personal Project",
    },
];

function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((project) => project.id === Number(id));
    const { theme } = useTheme();

    return (
        <div className="h-screen w-screen">
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

            <div className="wrapper my-4">
                <Link href="/" className="flex flex-row items-center gap-2 text-muted-foreground cursor-none">
                    <MoveLeft />
                    Back to Home
                </Link>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 justify-between gap-4 cursor-none">
                    <div className="space-y-6 order-2 sm:order-1">
                        <div className="space-y-3">
                            <span className="uppercase font-medium tracking-widest text-xs">case study</span>

                            <h1 className="font-bold text-3xl">{project?.title}</h1>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="uppercase tracking-widest text-xs font-bold">Problem</h1>
                                <p className="border border-border/60 rounded-xl p-4 sm:p-5">
                                    {project?.problem}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h1 className="uppercase tracking-widest text-xs font-bold">Solution</h1>
                                <p className="border border-border/60 rounded-xl p-4 sm:p-5">
                                    {project?.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 sm:order-2">
                        <div className="relative border border-border/60 rounded-xl overflow-hidden">
                            <img className="w-full h-100 object-cover hover:scale-102 
                    transition-all duration-500 ease-in-out rounded-b-none border border-border/60" src={project?.imgUrl} alt={project?.title} />
                            <div className="flex justify-between p-4 items-center bg-card text-card-foreground">
                                <div className="flex flex-col items-center">
                                    <span className="uppercase tracking-wider text-xs text-muted-foreground">overview</span>
                                    <h1 className="font-bold">{project?.title}</h1>
                                </div>
                                <span className="text-xs rounded-full border border-border/60 p-1 px-2 text-muted-foreground">
                                    {project?.type}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page