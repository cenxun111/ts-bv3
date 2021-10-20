import { createSlice } from '@reduxjs/toolkit'

interface IUserData{
    token:string;

}


const initialState:any = {
    isLoading:false,
    // isAuth: false,
    // error:"",
    userData:[],
    userInfo:[],
    error:false,
    // reSuccess:false,
};

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginLoading:(state) =>{
            state.isLoading = true;
        },
        loginSuccess:(state,action) =>{
            state.isLoading = false;
            state.userData = action.payload;
        },
        loginData:(state,action) =>{
            state.userInfo=action.payload.data;
        },
        loginError:(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        },
        registerSuccess:(state) => {
            state.reSuccess = true;
        }

    },
})

export const {loginLoading,loginSuccess,loginData,loginError,registerSuccess} = loginSlice.actions


export default loginSlice.reducer