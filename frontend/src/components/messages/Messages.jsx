import React, { useEffect, useRef } from 'react'
import Mesage from './Mesage'
import usegetMessages from '../../hooks/usegetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/uselistenMessages'



function Messagess() {

  const { messages, loading } = usegetMessages()
  useListenMessages();  /// lisen to the sender messages and show the new message
  const lastMessage = useRef();

  ///######### to scroll down otamaticli in the convirsation
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages]);


  return (
    <div className='px-4 flex-1 ' style={{ overflowY: 'scroll', maxHeight: '400px' }}>
      {
        !loading &&
        messages.length > 0 &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessage}>
            <Mesage mesage={msg} />
          </div>
        ))
      }

      {loading && [...Array(5)].map((_, indx) => <MessageSkeleton key={indx} />)}
      {
        !loading && messages.length === 0 && (
          <p className=' text-center text-black'> Send a message to start the conversation</p>
        )
      }


    </div>
  )
}

export default Messagess