import { Highlighter } from "@/components/ui/highlighter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"

function HeroSection() {
  return (
    <section className="wrapper mt-20 grid grid-cols-1 sm:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-bold">Dave Ancheta</h1>
        <span className="text-xl text-muted-foreground">Full-Stack Developer</span>
        <p className="text-3xl mt-5 font-medium sm:w-130">
          Hello World,
          I’m Dave from the Philippines,
          a technology {""}<Highlighter action="underline" color="#FF9800">enthusiast</Highlighter>{""}
          driven by passion for programming and continuous learning.</p>

        <p className="text-3xl mt-5 sm:w-130 pacifico text-muted-foreground">
          "Continue learning and exploring new things, but don't forget to rest, be with someone you love, and always pray." - Dave
        </p>

        <div className="mt-5 flex gap-2">
          <Button className="cursor-none" variant='outline' asChild>
            <Link href="https://github.com/daveancheta" className="flex items-center" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className="dark:fill-white fill-gray-600">
                <path d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50" /><path fill="#161614" d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.109-.256.5-.327.862-.156.363.163.57.505.445.755m2.46 2.194c-.24.221-.706.118-1.022-.231-.327-.349-.388-.814-.146-1.04.246-.22.698-.117 1.026.232.327.353.39.816.14 1.04zm1.687 2.808c-.307.213-.808.013-1.118-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.118.42.305.452.305.985-.008 1.203m2.853 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.295.191.434.403.566.979.274 1.278m3.688 1.098c-.12.391-.683.57-1.25.403-.565-.171-.935-.63-.821-1.026.118-.394.682-.58 1.253-.401.565.17.936.625.818 1.024m4.197.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.088-.726 0-.416.469-.755 1.067-.765.594-.012 1.081.32 1.081.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.35-.826.928-.933.592-.103 1.12.14 1.196.548" />
              </svg>
              Github
            </Link>
          </Button>
          <Button className="cursor-none" variant='outline' asChild>
            <Link href="https://www.linkedin.com/in/heavendaveancheta/" className="flex items-center" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="28x28" fill="currentColor" className="mercado-match text-blue-600 dark:text-blue-300" width="24" height="24" focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              Linkedin
            </Link>
          </Button>
          <Button className="cursor-none" variant='outline' asChild>
            <Link href="https://www.facebook.com/heavendavequimpoancheta/" className="flex items-center" target="_blank">
              <img className="w-4 h-4" src="/facebook.svg" alt="" />
              Facebook
            </Link>
          </Button>
        </div>
      </div>

      <div className="z-5 flex flex-col gap-2 sm:mt-0 mt-5">
        <div className="max-w-lg w-full">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Xl_xKoVivHk?si=8Bm0zR-x5zYSWrjq"
            thumbnailSrc="/profile.jpg"
            thumbnailAlt="Dave Ancheta"
          />
        </div>

        <div className="max-w-xl w-full">
          <Terminal>
            <TypingAnimation>Initializing life v2.0...</TypingAnimation>
            <AnimatedSpan>✔ Woke up early</AnimatedSpan>
            <AnimatedSpan>✔ Coded something new</AnimatedSpan>
            <AnimatedSpan>✔ Learned a skill</AnimatedSpan>
            <TypingAnimation>Deploying happiness...</TypingAnimation>
            <AnimatedSpan>✔ Grateful and motivated</AnimatedSpan>
          </Terminal>
        </div>
      </div>


    </section>
  )
}

export default HeroSection