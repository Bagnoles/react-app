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
    const [value, setValue] = useState("");

    const updateTextMessage = (event) => {
        setValue(event.target.value);
    }

    const updateMessageList = () => {
        setMessageList(messageList => [...messageList, {text: value, author: "user"}]);
        setValue("");
    }

    useEffect(() => {
        let timer;
        if (messageList[messageList.length - 1].author === "user") {
            timer = setTimeout(() => {
                setMessageList(messageList => [...messageList, {text: "text", author: "robot"}]);
            }, 2000);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [messageList]);


    return (
        <div className="App">
            <header className="App-header">
                <h4>Messenger</h4>
                <ul className="messenger">
                    {messageList.map((message) => (
                            <li className="message-wrp">
                                <p className="author">{message.author}</p>
                                <p className="text">{message.text}</p>
                            </li>
                        )
                    )}
                </ul>
                <textarea name="message" cols="30" rows="3" value={value} onChange={updateTextMessage}>Введите сообщение...</textarea>
                <button onClick={updateMessageList}>Отправить сообщение</button>
            </header>
        </div>
    );
}

export default App;
