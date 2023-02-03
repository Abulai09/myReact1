import { connect } from 'react-redux';
import { setCurrentPage,getUsersCountThunk, UsersThunk, UsersUnfollowThunk, UsersFollowThunk } from './../../redux/usersReducer';
import React from 'react'
import Users from "./Users"
import Loading from '../Loader/loading';
import { currentPageSelector, isAuthSelector, isFetchingSelector, pageSizeSelector, totalUsersCountSelector, usersSelector } from '../../redux/users-selector';


class UsersContainerAPI extends React.Component{

    componentDidMount(){
        this.props.UsersThunk(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.UsersThunk(pageNumber,this.props.pageSize)
    }

    render(){ 
        return (
            <div>
                {this.props.isFetching  
                    ? <Loading/>  
                    : null
                }
                 <Users  UsersFollowThunk={this.props.UsersFollowThunk} UsersUnfollowThunk={this.props.UsersUnfollowThunk} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                 users={this.props.users} getUsersCountThunk={this.props.getUsersCountThunk}
                 onPageChanged={this.onPageChanged}/>
            </div>
        )
    }
}

let mapStateToProps= (state) =>{
    return{
        users:usersSelector(state),
        pageSize:pageSizeSelector(state),
        totalUsersCount:totalUsersCountSelector(state),
        currentPage:currentPageSelector(state),
        isFetching:isFetchingSelector(state),
        isAuth:isAuthSelector(state)
    }
}

export default connect(mapStateToProps,{UsersFollowThunk,getUsersCountThunk,UsersUnfollowThunk,setCurrentPage,UsersThunk})(UsersContainerAPI)