import './App.css';
import {useEffect, useState} from "react";


function App() {
    const testMessages = [
        {
            text: "first",
            author: "user"
        },
        {
            text: "last",
            author: "robot"
        }
    ];

    const [messageList, setMessageList] = useState(testMessages);
    const [textMessage, setTextMessage] = useState("");

    const updateTextMessage = (event) => {
        setTextMessage(event.target.value);
    }

    const updateMessageList = () => {
        setMessageList(messageList => [...messageList, {text: textMessage, author: "user"}]);
    }

    useEffect(() => {
        if (messageList[messageList.length - 1].author === "user") {
            setTimeout(() => {
                setMessageList(messageList => [...messageList, {text: "text", author: "robot"}]);
            }, 5000);
        }
    }, [messageList]);

    return (
        <div className="App">
            <header className="App-header">
                <h4>App component</h4>
                <p>First react app</p>
                <ul>
                    {messageList.map((message) => (
                            <li>
                                text: {message.text} <br/>
                                author: {message.author}
                                <hr/>
                            </li>
                        )
                    )}
                </ul>
                <textarea name="message" cols="30" rows="5" value={textMessage} onChange={updateTextMessage}>Введите сообщение...</textarea>
                <button onClick={updateMessageList}>Отправить сообщение</button>
            </header>
        </div>
    );
}

export default App;
