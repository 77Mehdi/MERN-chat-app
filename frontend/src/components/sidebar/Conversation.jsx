import React from 'react'
import useCnversation from '../../store/useConversation'

function Conversation({ convirsation, emoji, lastInd }) {

  const { selectConversatin, setselectedConversation } = useCnversation();

  const isSelected = selectConversatin?._id === convirsation._id;

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
    ${isSelected ? "bg-sky-500" : ""} `}
        onClick={() => setselectedConversation(convirsation)}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={convirsation.profilePic} alt="" />
          </div>
        </div>

        <div className=' flex flex-col flex-1'>
          <div className=' flex gap-3 justify-between'>
            <p className="font-bold text-gray-200">{convirsation.userName}</p>
            <span className=' text-xl'>{emoji}</span>
          </div>
        </div>
        <div className=' divider my-0 py-0 h-1 divider-primary ' />
      </div>

      {!lastInd && <div className='divider my-0 py-0 h-1 divider-primary '></div>}
    </>
  )
}

export default Conversation