// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const MessageList = () => {
//     const [messages, setMessages] = useState([]);
//     const fetchMessage = async () => {
//         const response = await axios.get('https://pager-32e71-default-rtdb.asia-southeast1.firebasedatabase.app/pager.json');
//         console.log(response);
//         setMessages(response.data);
//         // Object.keys(messages).forEach(messageId => console.log(messages[messageId]));
//         if (response.data != null || response.data != undefined || response.data != {}) {
//             let messageList = [];
//             for (let key in response.data) {
//                 messageList.push(response.data[key]);
//             }
//             console.log("Message List", messageList);
//             messageList.reverse();
//             let newMessageList = messageList.slice(0, 5);
//             console.log(newMessageList);
//             setMessages(newMessageList);
//         }
//     };
//     useEffect(() => {
//         // axios.get('https://pager-32e71-default-rtdb.asia-southeast1.firebasedatabase.app/');
//         fetchMessage();
//     }, []);
//     return (
//         <div className='message_container'>
//             {messages.length > 0 && messages.map((message) => {
//                 return (
//                     <div key={message.id || message.name + message.message} className='message_card'>
//                         <div className="user_name">
//                             {message.name}
//                         </div>
//                         <div className="user_message">
//                             {message.message}
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }

// export default MessageList


import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {
    return (
        <div className='message_container'>
            {messages.length > 0 && messages.map((message) => (
                <div key={message.id || message.name + message.message} className='message_card'>
                    <div className="user_name">{message.name}</div>
                    <div className="user_message">{message.message}</div>
                </div>
            ))}
        </div>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            message: PropTypes.string,
        })
    ).isRequired,
};

export default MessageList;
