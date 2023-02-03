import s from './Mypost.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validate'
import Input from '../../input/input'


let maxLength10 =maxLength(10)

const Mypost = React.memo(props => {


    let btnSubmitt = (valuess) =>{
        props.ButtonOnClick(valuess.PostInput)
    }

    return(
        <div className={s.post}>
            <h2>Posts</h2>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={btnSubmitt}/>
        </div>
    )
})

let PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field validate={[ required,maxLength10,]} component={Input} name="PostInput" className={s.textinput} /> <br />
            <button className={s.button}>send</button>
        </form>
    )
}

let PostReduxForm = reduxForm({form:"posting"})(PostForm)

export default Mypost