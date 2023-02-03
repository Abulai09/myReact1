import s from './Diologs.module.css'
import MessageItems from "./MessageItems/MessageItems";
import DialogsItems from "./DialogsItems/DialogsItems";
import TextAreaConteiner from './textArea/textAreaConteiner';
import { withRedirect } from '../HOC/withRedirect';



const Diologs = (props) => {
    let newUsers=props.state.DialogPage.users.map(u => <DialogsItems name={u.name} id={u.id}/>)
    let newDialogs=props.state.DialogPage.Dialogsss.map(d => <MessageItems message={d.message}/>)

    return (
        <div className={s.content}>
            <div className={s.Diologs}>
                <div className={s.dialogs}>
                    {newDialogs}
                    <TextAreaConteiner />
                </div>
                <div className={s.friends}>
                    {newUsers}
                </div>
            </div>
        </div>
    )
}

let DiologsContainer = withRedirect(Diologs)


export default DiologsContainer;