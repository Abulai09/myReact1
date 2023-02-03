import { addMessageActionCreator, onChangeElemActionCreator } from '../../../redux/reducer3'
import TextArea from './textArea'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messageText:state.DialogPage.dialogplacceholder
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        OnChange:(text)=>dispatch(onChangeElemActionCreator(text)),
        ClickButton:(input)=>dispatch(addMessageActionCreator(input))
    }
}

const TextAreaConteiner=connect(mapStateToProps,mapDispatchToProps)(TextArea)

export default TextAreaConteiner