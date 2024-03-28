
import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loding, setloding] = useState(false);
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const succes = handelError({ username, password });
        if (!succes) return;

        setloding(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName: username,
                    password: password,
                }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            };
            //console.log(data)

            /////####################################
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);


        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        } finally {
            setloding(false)
        }
    }

    return { login, loding }
}

export default useLogin






function handelError({ username, password }) {
    
    if (!username  || !password ) {
        toast.error('error the inputs are emty')
        return false
    }

    return true;
}
