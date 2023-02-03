import s from './textArea.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../input/input'
import { maxLength, required } from '../../../utils/validators/validate'

let maxlength50 = maxLength(50)

const TextArea=(props)=>{

    let btnSubmit = (values)=>{
        props.ClickButton(values.DialogForm)
    }

    return(
       <DialogReduxForm  onSubmit={btnSubmit}/>
    )
}

let  DialogForm = (props) =>{
    return(
        <div className={s.content}>
            <form onSubmit={props.handleSubmit}>
                <Field component={Input} validate={[required,maxlength50]} name={"DialogForm"} className={s.input} /><br/>
               <button  className={s.button}>send</button>
            </form>
        </div>
    )
}

const DialogReduxForm = reduxForm({form:"dialog"})(DialogForm)
export default TextArea