import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useCnversation from '../../store/useConversation'
import { extractTime } from '../../utils/extractTime'

function Mesage({mesage}) {
  const { authUser } = useAuthContext()
  const {setselectedConversation}=useCnversation()

  const ItsMe = mesage.senderID === authUser.user._id
  const chatClassname = ItsMe ?" chat-end":" chat-start"

  //console.log('sender',mesage.senderID  , "user" ,authUser.user._id)

 const time = extractTime(mesage.createdAt);
  const profilPic = ItsMe? authUser.profilePic : setselectedConversation.profilePic;
  const bg = ItsMe ?'bg-blue-500':'';


  return (
    <div className={` chat ${chatClassname}`}>
        <div className=" chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className={` chat-bubble text-white ${bg}`}>{mesage.message}</div>
        <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center text-black'>{time}</div>
    </div>
  )
}

export default Mesage