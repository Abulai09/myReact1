import { UsersDAL } from "../API/API"


export let follow= (userId) => {
    return {
        type:"Follow",userId
    }
}

export let unfollow = (userId) =>{
    return {
        type:"Unfollow",userId
    }
}

export let setUsers = (users) => ({type:"setUsers",users})

export let setCurrentPage = (currentPage) => ({type:"setCurrentPage",currentPage})

export let setTotalUsersCount = (totaCount) => ({type:"setTotalUsersCount",totaCount})

export let setIsFetching = (fetching) => ({type:"isFetchingg",fetching})



let initialState = {
    users:[],
    pageSize:4,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
}

let usersReducer = (state=initialState,action) => {
    switch (action.type){
        case "Follow":
            return {
                ...state,
                users:state.users.map( u => {
                    if(u.id===action.userId){
                        return{...u,followed:true}
                    }
                    return u
                } )
            }
        case "Unfollow":
            return {
                ...state,
                users:state.users.map( u => {
                    if(u.id===action.userId){
                        return{...u,followed:false}
                    }
                    return u
                } )
            }
        
        case "setUsers":
            return {...state,
                users:action.users
            }    
        
        case "setCurrentPage":
            return{
                ...state,
                currentPage:action.currentPage
            }
        
        case "setTotalUsersCount":
            return{
                ...state,
                totalUsersCount:action.totaCount
            }

        case "isFetchingg":
            return {
                ...state,
                isFetching:action.fetching
            }

        default:
            return state
    }
}


export let UsersThunk = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await UsersDAL.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.data.items));
    dispatch(setIsFetching(false));
  };
};


export let UsersUnfollowThunk = (userId) => {
  return async (dispatch) => {
    let response = await UsersDAL.getUsersD(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
  };
};


export let UsersFollowThunk = (userId) => {
  return async (dispatch) => {
    let response = await UsersDAL.getUsersP(userId);
    if (response.data.resultCode === 0) {
      dispatch(follow(userId));
    }
  };
};

export let getUsersCountThunk = () =>{
    return (dispatch)=>{
        UsersDAL.getUsers().then(response=>{
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
    }
}

export default usersReducer