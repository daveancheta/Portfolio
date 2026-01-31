"use client"
import { Send, X } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '../ui/input-group'
import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { UseGeminiStore } from '@/app/state/use-store-gemini';

function ChatContainer({ isOpen, setIsOpen, avatar, name }:
    {
        isOpen?: boolean,
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
        name?: string,
        avatar?: string
    }) {
    const { generateResponse, isGenerating, response } = UseGeminiStore();
    const messageRef = useRef<HTMLDivElement>(null);
    const [prompt, setPrompt] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSend = () => {
        setMessage(prompt)
        setPrompt("")
        generateResponse(prompt)
    }
    const handleKeyEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }

        if (prompt.trim()) {
            if (e.key === 'Enter' && !e.shiftKey) {
                setMessage(prompt)
                setPrompt("")
                e.preventDefault()
                generateResponse(prompt)
            }
        }
    };

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: "smooth" })
        }
    });

    return (
        <div className='sm:relative bg-background border
        rounded-md sm:min-h-130 sm:min-w-100 max-w-100 h-screen flex flex-col w-screen max-h-130'>
            <div className='flex flex-col h-full'>
                <div className='flex items-center justify-between px-4 py-2 border-b-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <Avatar className='w-12 h-12'>
                            <AvatarImage className='object-cover w-full h-full' src={avatar} />
                        </Avatar>
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold'>{name}</span>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <span className='text-xs'>Active Now</span>
                            </div>
                        </div>
                    </div>
                    <button className='cursor-none'
                        onClick={() => setIsOpen(!isOpen)}><X /></button>
                </div>

                <div className='flex-1 overflow-y-auto space-y-4 p-2 scrollable-div'>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='bg-black dark:bg-white rounded-lg p-4 w-fit max-w-60'>
                            <span className='text-white dark:text-black text-sm'>Hi there! 👋 I’m here to help with Full-Stack Development. Got a question about frontend, backend, databases, or deploying your project? Ask me anything!</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-end'>
                        <div className={cn('bg-blue-500 rounded-lg p-4 w-fit max-w-60', !message.trim() && 'hidden')}>
                            <span className='text-white'>{message}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className={cn(!response && !isGenerating && 'hidden')}>
                            <div className='bg-black dark:bg-white rounded-lg p-4 w-fit max-w-60'>
                                {isGenerating ?
                                    <div className='bg-black dark:bg-white flex flex-row gap-1'>
                                        <div className='w-1 h-1 bg-white dark:bg-black animate-bounce rounded-full'></div>
                                        <div className='w-1 h-1 bg-white dark:bg-black animate-bounce delay-150 rounded-full'></div>
                                        <div className='w-1 h-1 bg-white dark:bg-black animate-bounce delay-300 rounded-full'></div>
                                    </div> :
                                    <span className='text-white dark:text-black text-sm'>{response}</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cn(isOpen && "hidden")} ref={messageRef}></div>
                </div>

                <InputGroup className='rounded-t-none'>
                    <InputGroupTextarea
                    className='cursor-none'
                        id="block-end-textarea"
                        placeholder="Aa"
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                        onKeyDown={handleKeyEnter}
                        maxLength={300}
                    />
                    <InputGroupAddon align="block-end">
                        <InputGroupText>{prompt.length}/300</InputGroupText>
                        <InputGroupButton variant="default" size="sm"
                            className="ml-auto"
                            onClick={handleSend}
                            disabled={isGenerating || !prompt.trim()}>
                            <Send />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div >
        </div >
    )
}

export default ChatContainer