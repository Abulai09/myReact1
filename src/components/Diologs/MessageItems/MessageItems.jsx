import s from './Message.module.css'


const MessageItems = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <div className={s.ditems}>{props.message}</div>
                </li>
            </ul>
        </div>
    )
}

export default MessageItems