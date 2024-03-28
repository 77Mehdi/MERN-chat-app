import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useGetConversation from '../../hooks/useGetConversation';
import useCnversation from '../../store/useConversation';
import toast from 'react-hot-toast';

function SearchInput() {
    const [serch, setSerch] = useState("");
    const {loading,convirsation}=useGetConversation();
    const {setselectedConversation}=useCnversation();

    const onsabmit = (e) => {
        e.preventDefault();
       if(!serch) return ;

       if(serch.length <3){
        toast.error('Search need to be at least 3 characters')
       }

       const convtion = convirsation.find((c)=>c.userName.toLowerCase().includes(serch.toLowerCase()))

       if(convtion){
        setselectedConversation(convtion)
        setSerch('');
       }else{
        toast.error('no user find')
       }
    
    }
    return (
        <form className=' flex items-center gap-2' onSubmit={onsabmit}>
            <input
                type="text"
                placeholder='Search...'
                className=' input input-bordered rounded-full'
                value={serch}
                onChange={(e) => setSerch(e.target.value)}
            />
            <button type='submit' className=' btn btn-circle bg-sky-500 text-white' >
                <IoSearch className=' w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput