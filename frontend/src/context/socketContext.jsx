
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

 const SocketContext = createContext()


export const useSoketontext =()=>{
    return useContext(SocketContext);
}




export const SocketContextProvider = ({children})=>{
    const [socket,setSocket]=useState(null)
    const [onlinUsers,setOnlineUsers]=useState([])
    const {authUser}=useAuthContext()

    useEffect(()=>{
        if(authUser){
            // const socket = io('http://localhost:8000',{
                const socket = io('https://mern-chat-app-q8cn.onrender.com',{
                query:{
                    userId : authUser.user._id
                }
            });

            setSocket(socket);

            socket.on("getOnlinUser",(users)=>{
                setOnlineUsers(users)
            })

            return ()=> socket.close()
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

    return(
        <SocketContext.Provider value={{socket,onlinUsers}}>
            {children}
        </SocketContext.Provider>
    )
}















