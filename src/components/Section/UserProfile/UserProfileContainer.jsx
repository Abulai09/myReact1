import React from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import {  getStatusThunk, savePhoto, setIsFetchingAC, setUserProfileAC, updateStatusThunk, UsersProfileThunk } from "../../../redux/reducer2";
import withRouter from "../../withRouter/withRouter";
import Loading from "../../Loader/loading";
import { withRedirect } from "../../HOC/withRedirect";

class UserProfileContainerAPI extends React.Component {

  refreshProfile(){
    let userId = this.props.params.id
    if(!userId){
      userId=1443
    }
    this.props.UsersProfileThunkk(userId)
    this.props.getStatusThunkk(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  render() {
    return (
      <div>
        {this.props.isFetching ? <Loading/> : <UserProfile savePhoto={this.props.savePhoto} isOwner={!this.props.params.id} updateStatusThunk={this.props.updateStatusThunk} status={this.props.status}  userProfilee={this.props.userProfilee} /> }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    userProfilee: state.ProfilePage.userProfilee,
    isFetching:state.ProfilePage.isFetching,
    status:state.ProfilePage.status,
    id:state.auth.id,
    isAuth:state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    setUserProfile: (UserProfilee) => dispatch(setUserProfileAC(UserProfilee)),
    setIsFetching:(fetch)=>dispatch(setIsFetchingAC(fetch)),
    UsersProfileThunkk:(userId)=>dispatch(UsersProfileThunk(userId)),
    getStatusThunkk:(userId)=>dispatch(getStatusThunk(userId)),
    updateStatusThunk:(status)=>(dispatch(updateStatusThunk(status))),
    savePhoto:(file)=>(dispatch(savePhoto(file)))
  }
}

let withRouteComponent = withRouter(UserProfileContainerAPI)

let UserProfileContainer = connect(mapStateToProps,mapDispatchToProps)(withRouteComponent);

export default withRedirect(UserProfileContainer);