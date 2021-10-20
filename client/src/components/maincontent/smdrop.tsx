import React, { useState, useEffect, useRef } from "react";
import infopic from "../../images/pug.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authAction";
import { RootState } from "../../redux/store";

const Evdrop = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.login.userData);
  const profile = useSelector((state: RootState) => state.login.userInfo);
  //   const { userInfo } = useSelector((state) => state.login);
  const [isActive, setIsActive] = useState(false);

  let menuRef = useRef<HTMLInputElement>(null);
  // const menuRef = React.useRef(HTMLButtonElement);
  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div ref={menuRef} className="relative">
      <div className=" top-0 right-0 w-20 md:w-28">
        <img
          className="w-10 h-10 rounded-full mx-auto"
          src={profile.avatar}
          alt=""
          onClick={(e) => setIsActive(!isActive)}
        />
      </div>

      {isActive && (
        <div className=" p-2 text-green-500 bg-gray-500 rounded-md text-xl mt-12 py-2 w-20  z-10 absolute top-0 right-0 md:w-28 ">
          {/* //   <div className="flex justify-center py-2 hover:bg-gray-300 rounded-md">
        //     <h1 onClick={(e) => setIsActive(!isActive)}>
        //       <Link to={`/user_info/${userInfo.username}`}>
        //         {userInfo.username}
        //       </Link>
        //     </h1>
        //   </div>
        //   <div className="flex justify-center py-2 hover:bg-gray-300 rounded-md">
        //     <h1 onClick={(e) => setIsActive(!isActive)}>
        //       <Link to="/upload">upload</Link>
        //     </h1>
        //   </div>
         
        //   <div className="flex justify-center py-2 hover:bg-gray-300 rounded-md">
        //     <h1 onClick={() => dispatch(logout())}>logout</h1>
        //   </div> */}
          {!user.token && (
            <div onClick={(e) => setIsActive(!isActive)}>
          
              <div className="text-center hover:bg-gray-300 rounded-md">
                <Link to="/login">login</Link>
              </div>
              <div className="text-center hover:bg-gray-300 rounded-md">
                <Link to="/register">register</Link>
              </div>
            </div>)}
         
          {user.token && (
              
            <div className="text-center">
              <h1 onClick={(e) => setIsActive(!isActive)} className="hover:bg-gray-300 rounded-md">
               <Link to={`/user_info/${profile.name}`}>
               {profile.name}
             </Link>
             </h1>
              <h1  className="hover:bg-gray-300 rounded-md" onClick={() => dispatch(logout())}>logout</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Evdrop;
