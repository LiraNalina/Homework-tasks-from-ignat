import React from 'react'

import s from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

 const Message: React.FC<MessageType> = (props: MessageType) => {
    return (

        <div className={s.message}>
            <img src={props.avatar} alt="post"></img>
            {props.name}
            {props.message}
            {props.time}
        </div>

    )
}

export default Message
