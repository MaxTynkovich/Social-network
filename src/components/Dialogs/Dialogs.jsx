import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);             
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {

    }

    let onNewMessageChange = () => {
        
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                 onChange={onNewMessageChange}
                 placeholder='Enter your message'
                 ></textarea></div>
                <div><button onClick = {()=> {alert('123');} }>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs