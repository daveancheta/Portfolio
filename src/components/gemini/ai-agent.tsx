import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import ChatContainer from './chat-container'
import { cn } from '@/lib/utils'

function AIAgent() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='fixed sm:bottom-10 bottom-5 flex sm:justify-self-end justify-self-center sm:mr-10 cursor-none z-20'>
            <div className='flex flex-col gap-2 sm:items-end items-center'>
                <div className={cn("transition-all duration-300 sm:origin-bottom-right origin-bottom ease-in-out", isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0")}>
                    <ChatContainer isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <Button variant="default"
                    className='rounded-full p-6 cursor-none w-fit'
                    onClick={() => setIsOpen(!isOpen)}>
                    <Send className='size-5 animate-bounce' />
                    <span className='font-bold'>Chat with Dave</span>
                </Button>
            </div>
        </div>
    )
}

export default AIAgent