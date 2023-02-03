import React from "react";
import { connect } from "react-redux";
import { authThunk,logOut} from "../../redux/Auth";
import Loading from "../Loader/loading";
import Header from "./Header";

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authThunkk()
    }

    render(){
        return <div>
            {this.props.isFetching ? <Loading/> :  <Header {...this.props}/>}
        </div>
    }
}

let mapStateToProps=(state)=>{
    return{
        email:state.auth.email,
        isAuth:state.auth.isAuth,
        isFetching:state.auth.isFetching,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        authThunkk:()=>dispatch(authThunk()),
        logOut:()=>dispatch(logOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)