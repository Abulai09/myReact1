import { addPostActionCreator, onChangeElemActionCreator } from '../../../redux/reducer2'
import Mypost from './Mypost'
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        value:state.ProfilePage.messageText
    }
}

let mapdispatchToProps = (dispatch) =>{
    return {
        onChange:(text)=>dispatch(onChangeElemActionCreator(text)),
        ButtonOnClick:(text)=>dispatch(addPostActionCreator(text))
    }
}


const MyPostContainer = connect(mapStateToProps,mapdispatchToProps)(Mypost)

export default MyPostContainer