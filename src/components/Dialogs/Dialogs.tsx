import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = { message: string }

const DialogItem: React.FC<DialogItemType> = (props) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alina"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Sergei"}
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "What's up!"},
        {id: 5, message: "Yo"}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;