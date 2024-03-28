import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

function Login() {
    const [username, setusernam] = useState("");
    const [password, setpassword] = useState("");

   const {login,loding}=useLogin()

    const handelsabmit = async (e) => {
        e.preventDefault();
     
       await login(username,password)
    }

    return (
        <div className='flex flex-col  items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=' text-3xl font-semibold text-center text-gray-300'>Login
                    <span className=' text-blue-500'> chat App</span>
                </h1>
                <form onSubmit={handelsabmit}>
                    <div>
                        <label htmlFor="" className=' label p-2'>
                            <span className="text-base label-text text-blue-300">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className=' w-full input input-bordered border-2 h-10   '
                            value={username}
                            onChange={(e) => setusernam(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className=' label p-2'>
                            <span className="text-base label-text  text-blue-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className=' w-full input input-bordered border-2 h-10   '
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className=' text-blue-300 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> {"Don't"} have an account</Link>
                    <div className=' flex justify-center  '>
                        <button
                            className=' btn  btn-sm mt-6 w-20  hover:bg-gray-800 hover:text-gray-200'
                            disabled={loding}
                        >{loding ? <span className=' loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login