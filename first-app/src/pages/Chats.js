import React, {useState} from "react";
import {AUTHORS} from "../constants/common";
import {useParams} from "react-router-dom";
import ChatList from "../components/ChatList";
import Messenger from "../components/Messenger";
import NotFound from "./NotFound";


const Chats = () => {

    const initialChats = {
        id1: {
            name: 'Chat 1',
            messages: [{
                text: "first",
                author: AUTHORS.user
            },
                {
                    text: "last",
                    author: AUTHORS.bot
                }]
        },
        id2: {
            name: 'Chat 2',
            messages: [{
                text: "second",
                author: AUTHORS.user
            },
                {
                    text: "last",
                    author: AUTHORS.bot
                }]
        }
    };

    const [chats, setChats] = useState(initialChats);
    const {chatId} = useParams();

    if (!chats[chatId]) {
        return (
            <div>
                <p>Select chat</p>
                <ChatList chats={chats}/>
            </div>);
    }


    return (
        <div className="messenger-wrp">
            <div>
                <ChatList chats={chats}/>
            </div>
            <div>
                <Messenger messages={chats[chatId].messages}/>
            </div>
        </div>
    )
}

export default Chats;