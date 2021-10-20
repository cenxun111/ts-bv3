import React, { useState,ChangeEvent, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ImageIcon from "@material-ui/icons/Image";
// import { editUser } from "../../redux/profileAction";
import { RootState } from "../../redux/store";

// export interface IUserProfile {
//     avatar : string | File
//   }
const Profile = () => {
const initState ={
name:'', account:'',avatar:"",password:'',cf_password:''}
  const profile = useSelector((state: RootState) => state.login.userInfo);
  // const [userData,setUserData] = useState([])
  const history = useHistory();

  const dispatch = useDispatch();
  const [onEdit, setOnEdit] = useState(false);
  const [user, setUser] = useState<any>(initState);
//   const [account, setAccount] = useState("");
//   const [avatar,setAvatar] = useState<any>('')

  // useEffect(() => {
  //     setUserData(auth.user);
  //   },[setUserData]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]:value })
  }
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(({email,password}))
    // dispatch(editUser({username,email,about,website},(login.userData.token)));
    // return history.push('/')
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    // setAvatars(e.target.files[0])
    if(files){
        const file = files[0]
        setUser({...user, avatar: file })
      }
  } 
  const { name, account, avatar, password, cf_password } = user
  return (
    <div>
      {!onEdit ? (
        <div className="flex-col w-full mt-14 md:w-6/12">
          <div>
            <img 
              src={profile.avatar}
              className="h-40 w-40 mt-1 rounded-full m-auto "
            />
            {/* <button>change avatar</button> */}
          </div>
          <div className="text-center">
            <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              USERNAME--{profile.name}
            </h1>
            <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              EMAIL--{profile.account}
            </h1>
            {/* <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              ABOUT--{profile.}
            </h1> */}

            {/* <a className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer">
              <Link to="/mysite">WEBSITE--{profile.website}</Link>
            </a> */}
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-green-300  w-2/3 py-1 mt-2 rounded-md "
              onClick={() => setOnEdit(!onEdit)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-col w-full mt-6 md:w-6/12">
          <div>
            <img 
              src={avatar ? URL.createObjectURL(avatar) : profile.avatar}
              className="h-40 w-40 mt-1 rounded-full m-auto "
            />
    
          </div>
          <div className="">
            <form className="">
            <div className="flex flex-row items-center  justify-center mt-8">
             <label className=" uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1 mr-4">
                Upload Photo
              </label>
              <label className="p-4 bg-green-100 rounded-lg cursor-pointer">
                  <ImageIcon />
                  <input
                    type="file"
                    multiple
                    name="file"
                    onChange={handleChangeFile} 
                    className="hidden"
                  />
                </label>
                </div>
              <div className="flex flex-col items-center  justify-center">
                <h1 className="text-green-300 text-xl  mt-6">Username</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"
                  type="text"
                  placeholder="username..."
                  name="name"
                  onChange = {handleChangeInput}
                />
                <h1 className="text-green-300 text-xl  mt-6">Email</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"
                  type="text"
                  placeholder="Email..."
                //   onChange={(e) => setAccount(e.target.value)}
                name="account"
                onChange = {handleChangeInput}
                />
              
              <h1 className="text-green-300 text-xl  mt-6">Password</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"
                  type="text"
                  placeholder="Password..."
                //   onChange={(e) => setAccount(e.target.value)}
                name="password"
                onChange = {handleChangeInput}
                />
              

              <h1 className="text-green-300 text-xl  mt-6">Password</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"
                  type="text"
                  placeholder="CF_Password..."
                //   onChange={(e) => setAccount(e.target.value)}
                name="cf_password"
                onChange = {handleChangeInput}
                />
              </div>

              {/* <h1 className="text-green-300 text-xl  mt-6">About me</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="About me..."
                  onChange={(e) => setAbout(e.target.value)}
                />

                <h1 className="text-green-300 text-xl  mt-6">Your's website</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="Your's website..."
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div> */}
              <div className="flex justify-center">
                <button
                  className="bg-green-300 w-4/12  py-2 mt-8 mx-1 rounded-md"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-green-300 w-4/12  py-2 mt-8 mx-1 rounded-md"
                  onClick={() => setOnEdit(!onEdit)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
            };

export default Profile;
