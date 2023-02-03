import image from '../../assets/images/LOADING.gif'
import { React } from 'react';
import s from './loader.module.css'

let Loading = () =>{
    return(
        <div className={s.div}>
            <img src={image} alt="loading..."/>
        </div>
    )
}

export default Loading