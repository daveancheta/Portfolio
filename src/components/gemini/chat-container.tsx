import { Send, X } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '../ui/input-group'
import React from 'react'

function ChatContainer({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className='sm:relative bg-background border
        rounded-md sm:min-h-130 sm:min-w-100 max-w-100 sm:h-full flex flex-col w-screen h-130'>
            <div className='flex flex-col h-full'>
                {/* Profile */}
                <div className='flex items-center justify-between px-4 py-2 border-b-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <img className='w-15 h-15 rounded-full object-cover' src="/profile.jpg" alt="profile" />
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold'>Chat with Dave</span>
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
                <div className='flex-1 overflow-y-auto'>

                </div>

                {/* Message Input */}
                <InputGroup className='rounded-t-none'>
                    <InputGroupTextarea
                        className='cursor-none'
                        id="block-end-textarea"
                        placeholder="Aa"
                    />
                    <InputGroupAddon align="block-end"
                        className='cursor-none'>
                        <InputGroupText>0/500</InputGroupText>
                        <InputGroupButton variant="default" size="sm" className="ml-auto cursor-none">
                            <Send />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div >
        </div >
    )
}

export default ChatContainer