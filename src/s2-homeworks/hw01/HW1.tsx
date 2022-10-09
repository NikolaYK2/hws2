import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import geralt from './geralt.png'
import ciri from './ciri.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessageProp``sType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: {avatar: string, name: string,},
    message:{text: string, time: string,},
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: geralt, // можно менять
        name: 'Geralt',  // можно менять
    },
    message: {
        text: `If I have to choose between one evil and another, I prefer not to choose at all.`, // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: ciri, // можно менять
        name: 'Cirilla', // можно менять
    },
    message: {
        text: 'Fairy tales cease to be fairy tales when they begin to be believed...', // можно менять
        time: '22:02', // можно менять
    },
}

const HW1 = () => {
    return (

        <div id={'hw1'}>
            <div className={s2.hwTitle}><span className={s2.hwTitleSpan}>Homework #1</span></div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
