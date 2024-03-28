
import React, { useState } from 'react'
import useCnversation from '../store/useConversation'
import toast from 'react-hot-toast'

const useSendMessages=()=> {
   const [loading,setloading]=useState(false)
   const {messages,setMessages,selectConversatin} = useCnversation()

   const sendMessage = async (messag)=>{
    setloading(true)
    try {
        const res = await fetch(`/api/message/send/${selectConversatin._id}`,{
            method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({message:messag}),
        })

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
     // console.log(data)
        setMessages([...messages,data])

    } catch (error) {
        toast.error(error.message)
    } finally{
        setloading(false)
    }
   }

return {sendMessage,loading}

}

export default useSendMessages