import {NavLink} from "react-router-dom";
import s from './Item.module.css'

const DialogsItems = (props) => {
    return (
        <NavLink to={'/Diologs/' + props.id} className={s.items}>{props.name}</NavLink>
    )
}

export default DialogsItems