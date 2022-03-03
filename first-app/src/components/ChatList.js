import {
    Avatar,
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    styled, TextField
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/chats/actions";
import DeleteIcon from '@mui/icons-material/Delete';


const ChatList = () => {

    const { chatList } = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addNewChat = () => {
        dispatch(addChat(value));
        setOpen(false);
        setValue('');
    }

    const handlerChatName = (event) => {
        setValue(event.target.value);
    }

    const Demo = styled('div')(({theme}) => ({
        backgroundColor: '#212632',
    }));

    return (
        <>
        <Demo>
            <List>
                {chatList?.map((chat, index) => (
                    <ListItem key={chat.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <Link to={`/chats/${chat.id}`}>
                            <ListItemText
                                primary={chat.name}
                                sx={{ color: '#028E9B'}}
                            /></Link>
                        <IconButton aria-label="delete" onClick={() => dispatch(deleteChat(index))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Demo>
            <Button onClick={handleClickOpen}>
                Add Chat
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new chat</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Chat name
                    </DialogContentText>
                    <TextField
                        value={value}
                        onChange={handlerChatName}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addNewChat}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ChatList;