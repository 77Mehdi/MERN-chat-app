import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'


function Signup() {
    const [inputs, setInputes] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { signup, loading } = useSignup();

    const handelsabmit = async (e) => {
        e.preventDefault();

        await signup(inputs)
    }


    return (
        <div className='flex flex-col  items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=' text-3xl font-semibold text-center text-gray-300'>Signup
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
                            className=' w-full input input-bordered border-2 h-10 '
                            value={inputs.username}
                            onChange={(e) => setInputes({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className=' label p-2'>
                            <span className="text-base label-text text-blue-300">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter email'
                            className=' w-full input input-bordered border-2 h-10'
                            value={inputs.email}
                            onChange={(e) => setInputes({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className=' label p-2'>
                            <span className="text-base label-text  text-blue-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className=' w-full input input-bordered border-2 h-10  '
                            value={inputs.password}
                            onChange={(e) => setInputes({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className=' label p-2'>
                            <span className="text-base label-text  text-blue-300">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className=' w-full input input-bordered border-2 h-10   '
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputes({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div>
                        <div className="flex">
                            <div className="form-control">
                                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                                    <span className='text-blue-300 label-text'>Male</span>
                                    <input
                                        type="checkbox"
                                        name="gender"
                                        id="male"
                                        className='checkbox border-slate-900'
                                        checked={inputs.gender === 'M'}
                                        onChange={(e) => setInputes({ ...inputs, gender: 'M' })}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                                    <span className='text-blue-300 label-text'>Female</span>
                                    <input
                                        type="checkbox"
                                        name="gender"
                                        id="female"
                                        className='checkbox border-slate-900'
                                        checked={inputs.gender === 'F'}
                                        onChange={(e) => setInputes({ ...inputs, gender: 'F' })}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <Link to="/login" className=' text-blue-300 text-sm hover:underline hover:text-blue-600 mt-1 inline-block'> Already have an account</Link>

                    <div className=' flex justify-center  '>
                        <button
                            className=' btn  btn-sm mt-6 w-20  hover:bg-gray-800 hover:text-gray-200'
                            disabled={loading}
                        >{loading ? <span className=' loading loading-spinner'></span> : "Sign up"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup