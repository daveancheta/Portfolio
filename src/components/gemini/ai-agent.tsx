import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import ChatContainer from './chat-container'
import { cn } from '@/lib/utils'

function AIAgent() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            containerRef?.current?.classList.remove("hidden")

            setTimeout(() => {
                containerRef?.current?.classList.remove("opacity-0", "scale-0")
                containerRef?.current?.classList.add("opacity-100", "scale-100")
            }, 100)
        } else {
            containerRef?.current?.classList.remove("opacity-100", "scale-100")
            containerRef?.current?.classList.add("opacity-0", "scale-0")

            setTimeout(() => {
                containerRef?.current?.classList.add("hidden")
            }, 300)
        }
    })

    return (
        <div className='fixed sm:bottom-16 bottom-5 flex sm:justify-self-end justify-self-end sm:mr-10 cursor-none z-20'>
            <div className='flex flex-col gap-2 sm:items-end items-end'>
                <div className="transition-all duration-300 sm:origin-bottom-right origin-bottom ease-in-out opacity-0 scale-0 hidden"
                    ref={containerRef} >
                    <ChatContainer isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <Button variant="default"
                    className='rounded-full p-6 cursor-none w-fit sm:mr-0 mr-5'
                    onClick={() => setIsOpen(!isOpen)}>
                    <Send className='size-5 sm:animate-bounce' />
                    <span className='font-bold sm:flex hidden'>Chat with Dave</span>
                </Button>
            </div>
        </div>
    )
}

export default AIAgent