import './App.css';
import {useEffect, useState} from "react";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Paper, styled, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import React from "react";
import {AUTHORS} from "./constants/common";


function App() {
    const testMessages = [
        {
            text: "first",
            author: AUTHORS.user
        },
        {
            text: "last",
            author: AUTHORS.bot
        }
    ];

    const [messageList, setMessageList] = useState(testMessages);
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

    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    const Demo = styled('div')(({theme}) => ({
        backgroundColor: '#212632',
    }));
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <div className="App">
            <header className="App-header">
                <h4>Messenger</h4>
                <div className="messenger-wrp">
                    <div className="messages-list">
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PersonIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </div>
                    <div>
                        <ul className="messenger">
                            {messageList.map((message, index) => (
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
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
