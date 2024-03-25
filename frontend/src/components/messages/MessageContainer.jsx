import React from 'react'
import Messagess from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'


function MessageContainer() {
    const nochat = true;

    return (
        <div>
            <div className='md:min-w-[450px] flex flex-col'>
                {nochat ? <NoChatSelected /> : (
                    <>
                        <div className=' bg-slate-500 px-4 py-4 mb-2'>
                            <span className=' label-text font-bold text-white h-2'> To : </span> <span className=' text-gray-900 font-bold'>Johan nega</span>
                        </div>

                        <Messagess />
                        <MessageInput />
                    </>
                )}
            </div>
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    return (
        <>
            <div className='flex justify-center mt-[200px]'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                    <p>Welcome 👋 Johan nega</p>
                    <p>Select a chat to start messaging</p>
                    <TiMessages className='text-3xl md:text-6xl text-center' />
                </div>
            </div>

        </>

    );
};