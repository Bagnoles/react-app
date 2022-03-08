import {AUTHORS} from "../constants/common";
import PersonIcon from "@mui/icons-material/Person";
import AndroidIcon from "@mui/icons-material/Android";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessageWithThunk} from "../store/messages/actions";


const Messenger = () => {

    const {chatId} = useParams();
    const { messageList } = useSelector(state => state.messages);
    const { name } = useSelector((state) => state.profile);
    const messagesChat = messageList[chatId];
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const updateTextMessage = (event) => {
        setValue(event.target.value);
    }

    const updateMessageList = () => {
        if (value !== "") {
            dispatch(addMessageWithThunk(chatId, {text: value, author: name}))
            setValue("");
        }
    }


    return (
        <>
            <ul className="messenger">
                {messagesChat?.map((message) => (
                        <li className="message-wrp" key={message.id}>
                            {message.author !== AUTHORS.bot ? <PersonIcon/> : <AndroidIcon/>}
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