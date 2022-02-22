import {Avatar, List, ListItem, ListItemAvatar, ListItemText, styled} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {Link, useParams} from "react-router-dom";
import React from "react";


const ChatList = (props) => {
    const {chatId} = useParams();
    const {chats} = props;

    const Demo = styled('div')(({theme}) => ({
        backgroundColor: '#212632',
    }));

    return (
        <Demo>
            <List>
                {Object.keys(chats).map((id, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <Link to={`/chats/${id}`}>
                            <ListItemText
                                primary={chats[id].name}
                            /></Link>
                    </ListItem>
                ))}
            </List>
        </Demo>
    )
}

export default ChatList;