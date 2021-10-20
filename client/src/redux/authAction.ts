import { loginData,loginSuccess,loginError,registerSuccess } from "./authSlice";

import { postAPI,getAPI } from "./FetchData";

export interface Iuser {
  account:string
  password:string
}
export interface Ruser {
  name:string
  account:string
  password:string
}

export const login = async (user:Iuser, dispatch:any) => {
 
    // console.log(user);
    try {
      const res = await postAPI('login' ,user);
     
  
      dispatch(loginSuccess({
          token:res.data.access_token,
          user:res.data.user
      }));
  
    //   localStorage.setItem("firstLogin", true);
      dispatch(loginData({
        data:res.data.user,
      }))
      localStorage.setItem('logged', 'xun')
    } catch (error:any) {
      dispatch(loginError("woring password or username"));
    }
  };

  export const register = async(user:Ruser,dispatch:any) => {
    try{
    const res = await postAPI('register',user)
    console.log(res);
    dispatch(registerSuccess())
    //   loginSuccess({
    //     token:res.data.access_token
    //   })
    // );
   
    // dispatch(loginData({
    //   data:res.data.user,
    // })
  } catch (error:any)
     {
      dispatch(loginError(error.message));
    }
  };

  export const refreshToken =()=> async(dispatch:any) => {
    const logged = localStorage.getItem('logged')
    if(logged !== 'xun') return;
  try {
    const res = await getAPI('refresh_token');
   
    dispatch(loginSuccess({
      token:res.data.access_token,
      user:res.data.user
    }));
    dispatch(loginData({
      data:res.data.user,
    }));
  } catch(error:any){
    dispatch(loginError(error.message))
  }
};

export const logout = () => async (dispatch:any) => {
  try{
    localStorage.removeItem('firstLogin')
        await getAPI('logout')
        window.location.href = "/"

  }catch(error:any){
    dispatch(loginError(error.message))
  }
}