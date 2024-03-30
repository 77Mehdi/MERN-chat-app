import { useEffect } from "react";
import { useSoketontext } from "../context/socketContext"
import useCnversation from "../store/useConversation"
import notification from '../assets/Sonde/notification.mp3'

// this hooke is lisen to the sender messages and show the new message

const useListenMessages = ()=>{
    const {socket} = useSoketontext()
    const {messages,setMessages} = useCnversation();


    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            newMessage.shake = true;
            const sound = new Audio(notification);
            sound.play();
            setMessages([...messages,newMessage]);
        });

        return ()=>socket?.off("newMessage");

    },[socket,setMessages,messages])
}

export default useListenMessages;













