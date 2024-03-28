import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import {getRandomEmoji} from '../../utils/emoje'
function Conversations() {
  const {loading,convirsation}=useGetConversation();

  //console.log(convirsation)
  return (
    <div className=' p-2 flex flex-col overflow-auto'>
        
        { convirsation.map((cnvrt,indx)=>(
          <Conversation  key={cnvrt._id}
          convirsation={cnvrt}
          emoji={getRandomEmoji()}
          lastInd={indx === convirsation.length - 1}
          />
        ))} 
      {loading?<span className=' loading loading-spinner mx-auto'></span>:null}



    </div>
  )
}

export default Conversations