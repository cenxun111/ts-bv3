import React, {FormEvent} from  'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
// import { register } from '../redux/authAction'
import { register } from '../../redux/authAction'
// import { register } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux'
const Register = () => {
    const [account, setAccount] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        register({account,name,password},dispatch)
    //     dispatch(register({username,email,password}))
        };


    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center h-full mt-20 font-mono">
                <span className="text-blue-700 text-6xl pt-16">Register</span>
                <form className="flex flex-col justify-center mt-8" >
                   
                    <label className="text-green-600 text-3xl justify-center flex mt-8">user</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="text" placeholder="email..."
                        onChange={(e) => setName(e.target.value)} />
                     <label className="text-green-600 text-3xl justify-center flex mt-8">email</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="text" placeholder="username..."
                        onChange={(e) => setAccount(e.target.value)} />
                    <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="password" placeholder="password.."
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="p-2 mt-8 bg-blue-800 rounded-md w-28  text-xl text-blue-300  disabled:opacity-50 hover:bg-blue-400 " onClick={handleSubmit}>Register</button>
                </form>
                


            </div>
            <div className="absolute top-1 right-2 ">
            <button className="  bg-blue-800 rounded-md w-28 p-2 text-xl text-blue-300"><Link to="/login">Login</Link></button>
            </div>
        </div>
    )
}
export default Register

