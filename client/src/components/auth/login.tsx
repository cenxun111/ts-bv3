import React,{ useState,FormEvent  } from 'react'
// import type {FormEvent} from 'react'
import { Link } from "react-router-dom"
// import { loginSuccess } from '../redux-toolkit/authSlice';
import { login } from '../../redux/authAction';
import { useDispatch } from 'react-redux';
import { InputChange,FormSubmit } from '../../ftypes';

const Login = () => {
    
    const [account, setAccount] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch()
    const [showpass,setShowpass] = useState(false)
    // const initialState = { account: '', password: '' }
    // const [userLogin, setUserLogin] = useState(initialState)
    // const { account, password } = userLogin
    // const handleSubmit = (e: FormSubmit) =>{
    //     e.preventDefault()
    //     // console.log(({email,password}))
    //     login({email,password},dispatch)
    // };

    // const initialState = { account: '', password: '' }
    // const [userLogin, setUserLogin] = useState(initialState)
    // const { account, password } = userLogin
  
    // const [typePass, setTypePass] = useState(false)
  
    // const dispatch = useDispatch()
  
    // const handleChangeInput = (e: InputChange) => {
    //   const {value, name} = e.target
    //   setUserLogin({...userLogin, [name]:value})
    // }
    // const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // //     const {value, name} = e.target
    // //     setUserLogin({...userLogin, [name]:value})
    // //   }
    // const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement> ) => setAccount(e.target.value) 

    // const phandleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      login({account,password},dispatch)}
    // console.log(userLogin)
       
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    //     e.preventDefault()
    //     console.log(userLogin)}
    
return (
    <div className="relative" >
    <div  className="flex flex-col items-center justify-center h-full mt-20 font-mono">
        <span className="text-blue-700 text-6xl pt-16">Login</span>
        <form className="flex flex-col justify-center mt-8">
        
            <label className="text-green-600 text-3xl justify-center flex mt-8">Email</label>
            <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"   type="email"
            // onChange={handleChangeInput} value={email}
            
            value={account} 
            // onChange={handleChangeInput} 
            onChange ={(e) => setAccount(e.target.value)}
            />
            <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
            <div className="relative">
            <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"  type={showpass ?"text":"password"}
            value={password} 
             onChange={(e) => setPassword(e.target.value)}
            // onChange={phandleChangeInput}
            />
            <small className='absolute top-2 right-2 pt-3 cursor-pointer' onClick={() => setShowpass(!showpass)}>
                {showpass ? 'Hide':'Show'}
            </small>
            </div>
            <button className="p-2 mt-8 bg-blue-800 rounded-md w-28  text-xl text-blue-300  disabled:opacity-50 hover:bg-blue-400" onClick={handleSubmit} >Login</button>
        </form>
        {/* <Notify /> */}

    </div>
    <div className="absolute top-1 right-2 ">
    <button className="  bg-blue-800 rounded-md w-28 p-2 text-xl text-blue-300"><Link to="/register">Register</Link></button>
    {/* {notify.loading && <div className=' text-3xl  text-blue-400'><LoopIcon/>Loading...</div>} */}
    </div>
    </div>
)
}

export default Login


