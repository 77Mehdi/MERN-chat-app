import React, { useEffect, useState } from 'react'
import useCnversation from '../store/useConversation'
import toast from 'react-hot-toast'

const usegetMessages = () => {
    const [loading, setloading] = useState(false)
    const { messages, setMessages, selectConversatin } = useCnversation();

    useEffect(() => {

        const getMessages = async () => {
            setloading(true)
            try {
                const res = await fetch(`/api/message/${selectConversatin._id}`);
                const data =  await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }

                //console.log(data.error)
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setloading(false);
            }
        }

        if (selectConversatin?._id) {
            getMessages()
        }


    }, [selectConversatin?._id, setMessages])

    return { messages, loading }

}

export default usegetMessages