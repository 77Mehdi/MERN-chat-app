import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useCnversation from '../../store/useConversation'
import { extractTime } from '../../utils/extractTime'

function Mesage({mesage}) {
  const { authUser } = useAuthContext()
  const {selectConversatin}=useCnversation()

  const ItsMe = mesage.senderID === authUser.user._id
  const chatClassname = ItsMe ?" chat-end":" chat-start"

  //console.log('sender',mesage.senderID  , "user" ,authUser.user._id)

 const time = extractTime(mesage.createdAt);
  const profilPic = ItsMe? authUser.user.profilePic : selectConversatin.profilePic;
  const bg = ItsMe ?'bg-blue-500':'';
  const shackClass = mesage.shake ? "shake":"";
 // console.log(profilPic)

  return (
    <div className={` chat ${chatClassname}`}>
        <div className=" chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={profilPic} />
            </div>
        </div>
        <div className={` chat-bubble text-white ${bg} ${shackClass}`}>{mesage.message}</div>
        <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center text-black'>{time}</div>
    </div>
  )
}

export default Mesage