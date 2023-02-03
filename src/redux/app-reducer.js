import { authThunk } from "./Auth";


let initialState  = {
    initializing:false
};

let AppReducer = (state  = initialState, action ) => {
  switch (action.type) {
    case "initialize":
      return {    
        ...state,
        initializing:true,
      }
    default:
      return state;
  }
};


export let setInitializeAC = () => ({ type: "initialize",});

export let setInitializeTC = () => (dispatch ) =>{

    let promise = dispatch(authThunk())

    Promise.all([promise]).then( ()=>{
      dispatch(setInitializeAC())
    })
}

export default AppReducer;