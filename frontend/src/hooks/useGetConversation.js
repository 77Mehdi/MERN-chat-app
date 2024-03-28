import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const [loading, setloading] = useState(false);
    const [convirsation, setConversation] = useState([]);

    useEffect(() => {
        const getConvirsation = async () => {
            setloading(true);
            try {
                const res = await fetch("/api/users");
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error)
                }

                setConversation(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setloading(false);
            }
        }

        getConvirsation();
    }, [])

    return {loading,convirsation}
}

export default useGetConversation