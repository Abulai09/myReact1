import { profileDAL, UsersDAL } from "../API/API";

export let onChangeElemActionCreator = (text) => ({
  type: "onChangeElem",
  elemText: text,
});

export let addPostActionCreator = (text) => ({
  type: "addPost",
  userPost: text,
  user: "Abulai",
});

export let setUserProfileAC = (userProfilee) => ({
  type: "setUserProfile",
  userProfilee,
});

export let setIsFetchingAC = (fetching) => ({type:"isFetchingg",fetching})

let savePhotoAC = (photos) => ({type:"sendFile",photos})


let initialState = {
  post: [
    { message: "Hey evreryone, i am learning react!!!", num: 24, name: "Dima" },
    { message: "I will be reachman", num: 99, name: "Damir" },
    { message: "Hello, everyone!!!", num: 99, name: "Amir" },
  ],
  messageText: "placceholder",
  userProfilee: [],
  isFetching: false,
  status:"",
  photos:null
};

let addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "onChangeElem":
      return {
        ...state,
        messageText: action.elemText,
      };
    case "addPost":
      let postr = {
        message: action.userPost,
        num: 0,
        name: action.user,
      };
      return {
        ...state,
        post: [...state.post, postr],
      };
    case "setUserProfile":
      return {
        ...state,
        userProfilee: action.userProfilee,
      };
    case "isFetchingg":
      return {
        ...state,
        isFetching: action.fetching,
      };
    case "getStatus":
      return{
        ...state,
        status:action.status
      }
    case "sendFile":
      return{
        ...state,
        photos:action.photos
      }
    default:
      return state;
  }
};

let getStatusAC = (status) => ({type:"getStatus",status})

export let getStatusThunk = (userId) => async (dispatch) => {
  let response = await profileDAL.getStatus(userId);
  dispatch(getStatusAC(response.data));
};

export let updateStatusThunk = (status) => (dispatch) => {
  profileDAL.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getStatusAC(status));
    }
  });
};


export let UsersProfileThunk = (userId) => {
  return async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    let response = await UsersDAL.getUserProfile(userId)
      dispatch(setUserProfileAC(response.data))
    dispatch(setIsFetchingAC(false));
  }
}

export let savePhoto = (photos) => async (dispatch)=>{
  let response = await UsersDAL.savePhoto(photos)
  if(response.data.resultCode===0){
    dispatch(savePhotoAC(response.data.photos))
  }
}

export default addPostReducer;