import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import MessageList from './components/MessageList'
import axios from 'axios';
import './App.css';

const App = () => {
    const [messages, setMessages] = useState([]);
    const fetchMessages = async () => {
        const response = await axios.get('https://pager-32e71-default-rtdb.asia-southeast1.firebasedatabase.app/pager.json');
        if (response.data) {
            const messageArray = Object.values(response.data).reverse().slice(0, 5);
            setMessages(messageArray);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);
    return (
        <div className='app'>
            <div className="container">
                <div className="shape_1"></div>
                <div className="shape_2"></div>
                <Form onSubmitSuccess={fetchMessages} />
            </div>
            <MessageList messages={messages} />
        </div>
    )
}

export default App
