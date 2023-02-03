import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header=(props) =>{
    return(
        <header>
            <div className={s.header__container}>
                <h2>Social</h2>
                <nav className={s.nav}>
                    <div className={s.link}><NavLink to="/" activeClassName={s.active}>Profile</NavLink></div>
                    <div className={s.link}><NavLink to="/Users" activeClassName={s.active}>Users</NavLink></div>
                </nav>
                <div className={s.div}>
                {
                    props.isAuth ?
                     <span className={s.email}>{props.email}</span> 
                    : <nav className={s.Nav}>
                            <div className={s.Link}><a href="/login" className={`${s.btn} ${s.btn_b}`}>Login</a></div>
                    </nav>
                }
                </div>
                <div className={s.Link}><button onClick={props.logOut} className={`${s.btn} ${s.btn_b}`}>Logout</button></div>
            </div>
      </header>
    )
}
export default Header