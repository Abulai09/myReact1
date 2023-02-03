import image from "../../assets/images/images.jpg";
import s from "./users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";


const User = (props) =>{   
    return(
        <div>{props.users.map((u) => (
            <div className={s.user} key={u.id}>
              <div className={s.div1}>
                <NavLink to={"/" + u.id}>
                  {" "}
                  <img
                    className={s.userAva}
                    src={u.small != null ? u.small : image}
                    alt="Ava"
                  />
                </NavLink>
                <div className={s.div}>
                  <h2 className={s.userName}>{u.name}</h2>
                  <p className={s.userStatus}>
                    {u.status != null ? u.status : "Not specified"}
                  </p>
                </div>
              </div>
              <div className={s.div2}>
                {/* <p className={s.Country}>{"u.country"}</p>
                            <p className={s.City}>{"u.city"}</p> */}
              </div>
              <div className={s.div3}>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.UsersUnfollowThunk(u.id);
                      /*UsersDAL.getUsersD(u.id).then(data => { if(data.resultCode===0) {props.unfollow(u.id);}})*/
                    }}
                    className={s.button}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.UsersFollowThunk(u.id);
                      /*UsersDAL.getUsersP(u.id)
                      .then(data => { if(data.resultCode===0) { props.follow(u.id);}})*/
                    }}
                    className={s.button}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
    </div>
)}

export default User