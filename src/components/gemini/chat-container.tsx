"use client"
import { Send, X } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '../ui/input-group'
import React, { useEffect, useRef, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/lib/utils';

function ChatContainer({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    const ai = new GoogleGenAI({ apiKey });
    const [prompt, setPrompt] = useState<string>("")
    const [response, setResponse] = useState<any>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const messageRef = useRef<HTMLDivElement>(null)

    const handleSend = async () => {
        setMessage(prompt)
        setIsLoading(true)
        setPrompt("")

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: { text: prompt },
            });
            setResponse(response.text?.replace(/\*/g, '') || '');
        } catch (error) {
            console.log(error)
            setResponse("This feature is temporarily unavailable. Check back shortly.");
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: "smooth" })
        }
    })

    return (
        <div className='sm:relative bg-background border
        rounded-md sm:min-h-130 sm:min-w-100 max-w-100 sm:h-full flex flex-col w-screen h-130 max-h-130'>
            <div className='flex flex-col h-full'>
                {/* Profile */}
                <div className='flex items-center justify-between px-4 py-2 border-b-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <img className='w-15 h-15 rounded-full object-cover' src="/profile.jpg" alt="profile" />
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold'>Heaven Dave Ancheta</span>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <span className='text-xs'>Active Now</span>
                            </div>
                        </div>
                    </div>
                    <button className='cursor-none'
                        onClick={() => setIsOpen(!isOpen)}><X /></button>
                </div>

                {/* Messages */}
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
                        <div className={cn(!response && !isLoading && 'hidden')}>
                            <div className='bg-black dark:bg-white rounded-lg p-4 w-fit max-w-60'>
                                {isLoading ?
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
                    <div ref={messageRef}></div>
                </div>

                {/* Message Input */}
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
                    <InputGroupAddon align="block-end"
                        className='cursor-none'>
                        <InputGroupText>{prompt.length}/300</InputGroupText>
                        <InputGroupButton variant="default" size="sm"
                            className="ml-auto cursor-none"
                            onClick={handleSend}
                            disabled={isLoading || !prompt.trim()}>
                            <Send />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div >
        </div >
    )
}

export default ChatContainer