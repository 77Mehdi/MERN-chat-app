import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

function LogutButton() {

    const {logout,loding} = useLogout()
    return (
        <div className=' text-white mt-auto '>
            <BiLogOut 
            className=' w-6 h-6 cursor-pointer  font-bold' 
            onClick={logout}
            />
        </div>
    )
}

export default LogutButton