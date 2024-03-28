import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useSignup() {

    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();


    const signup = async ({ username, email, password, confirmPassword, gender }) => {

        const succes = handelError({ username, email, password, confirmPassword, gender });
        if (!succes) return;

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName: username,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                    gender: gender
                })
            })

            const data = await res.json();
            //console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }
            
            ////############################### localData from refrech page
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        } finally {
            setLoading(false);
        }

    }


    return { signup, loading }
}

export default useSignup



function handelError({ username, email, password, confirmPassword, gender }) {
    if (!username || !email || !password || !confirmPassword || !gender) {
        toast.error('error the inputs are emty')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Password not match')
        return false;
    }

    if (password.length < 8) {
        toast.error('Password must be at least 8 characters')
        return false;
    }

    return true;
}


