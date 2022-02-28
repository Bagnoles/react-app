import {AUTHORS} from "../constants/common";
import PersonIcon from "@mui/icons-material/Person";
import AndroidIcon from "@mui/icons-material/Android";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, {useEffect, useState} from "react";


const Messenger = (props) => {
    const {messages} = props;


    const [messageList, setMessageList] = useState(messages);
    const [value, setValue] = useState("");

    const updateTextMessage = (event) => {
        setValue(event.target.value);
    }

    const updateMessageList = () => {
        if (value !== "") {
            setMessageList(messageList => [...messageList, {text: value, author: AUTHORS.user}]);
            setValue("");
        }
    }

    useEffect(() => {
        let timer;
        if (messageList[messageList.length - 1].author === AUTHORS.user) {
            timer = setTimeout(() => {
                setMessageList(messageList => [...messageList, {text: "text", author: AUTHORS.bot}]);
            }, 2000);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [messageList]);

    useEffect(() => {
        setMessageList(messages);
    }, [messages]);

    return (
        <>
            <ul className="messenger">
                {messageList?.map((message, index) => (
                        <li className="message-wrp" key={index}>
                            {message.author === AUTHORS.user ? <PersonIcon/> : <AndroidIcon/>}
                            <p className="author">{message.author}</p>
                            <p className="text">{message.text}</p>
                        </li>
                    )
                )}
            </ul>
            <div className="btn-wrp">
                <TextField
                    id="outlined-basic"
                    label="Write message"
                    autoFocus
                    value={value}
                    onChange={updateTextMessage}/>
                <Button variant="contained" endIcon={<SendIcon/>} onClick={updateMessageList}>
                    Send
                </Button>
            </div>
        </>
    )
}

export default Messenger;