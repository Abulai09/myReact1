export let addMessageActionCreator =(input) =>({
                type: "addMessage",
                Message:input
           })

export let onChangeElemActionCreator = (text) => ({
            type: "onChangeLetter",
            elemtext:text
        })

let initialState={
    users:[
        {id:1,name:'Ali'},
        {id:2,name:'Alican'},
        {id:3,name:'Sultan'}
    ],
    Dialogsss:[
        {message:'How are you?'},
        {message: 'How is it going?'},
        {message: 'I am so really good!!!'}
    ],
    dialogplacceholder:"placceholderppp"

}

let addMessageReducer = (state=initialState, action) => {
    let copyState={...state}
    copyState.Dialogsss=[...state.Dialogsss]
    if (action.type === "addMessage") {
        let Dialog={
                message:action.Message
            }
            copyState.Dialogsss.push(Dialog)
    }
    else if (action.type === "onChangeLetter") {
        copyState.dialogplacceholder=action.elemtext
    }
    return copyState
}

export default addMessageReducer