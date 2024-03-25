import React from 'react'

function Mesage() {
  return (
    <div className=' chat chat-end'>
        <div className=" chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className={` chat-bubble text-white bg-blue-500`}>Hi! what are you doing</div>
        <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center'>12:06</div>
    </div>
  )
}

export default Mesage