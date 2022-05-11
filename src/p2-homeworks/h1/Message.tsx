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
            <img className={s.avatar} src={props.avatar} alt="post"></img>

            <div className={s.post}>
                <span className={s.name} >{props.name}</span>
                <br />
                <span className={s.postText}>{props.message}</span>

                <span className={s.time}>{props.time}</span>
            </div>

        </div>

    )
}

export default Message
