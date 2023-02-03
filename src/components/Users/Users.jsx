import s from "./users.module.css";
import React from "react";
import Paginator from "./paginator";
import User from "./user";

let Users = (props) => {
  return (
    <div className={s.wrapper}>
      <Paginator onPageChanged={props.onPageChanged} getUsersCountThunk={props.getUsersCountThunk} pageSize={props.pageSize} totalItemsCount = {props.totalUsersCount} currentPage={props.currentPage}/>
      <User users={props.users}  UsersFollowThunk={props.UsersFollowThunk} UsersUnfollowThunk={props.UsersUnfollowThunk}/>     
    </div>
  )
}
export default Users;
