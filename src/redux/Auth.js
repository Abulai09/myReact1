import { stopSubmit } from "redux-form";
import { authDAL } from "../API/API";


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setDataAuth":
      return {    
        ...state,
          email: action.email,
          isAuth: true,
      };
    case "isFetchingg":
      return {
        ...state,
        isFetching: action.fetching,
      };
    default:
      return state;
  }
};


export let setDataAuthAC = (id,login,email ,isAuth) => ({ type: "setDataAuth",id, login,email,isAuth });
export let setIsFetchingAC = (fetching) => ({type:"isFetchingg",fetching})

export const authThunk = () => {
  return (dispatch )=>{
     setIsFetchingAC(true)
        authDAL.auth()
            .then(response => {
                if(response.data.resultCode===0){
                  let {id,login,email} = response.data.data
                    dispatch(setDataAuthAC(id,login,email,true))
                    dispatch(setIsFetchingAC(false))
                }
            })
  }
}

export const login = (email ,password,rememberMe) => {
  return (dispatch)=>{
        authDAL.loginn(email,password,rememberMe)
            .then(response => {
                if(response.data.resultCode===0){
                  dispatch(authThunk())
                }
                else{
                  let messages = response.data.messages.length>0 ? response.data.messages[0] : "Invalid passoword or email"
                  dispatch(stopSubmit("login",{_error:messages}))
                }
            })
  }
}
export const logOut = () => {
  return (dispatch)=>{
        authDAL.logout()
            .then(response => {
                if(response.data.resultCode===0){
                  dispatch(setDataAuthAC(null,null,null,false))
                }
            })
  }
}


export default authReducer;