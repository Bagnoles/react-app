import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Home from "./Home";
import {List, ListItem} from "@mui/material";
import Chats from "./Chats";
import Word from "./Word";
import Login from "./Login";
import Registration from "./Registration";
import RequireAuth from "../hocs/RequireAuth";
import useAuth from '../hooks/AuthProvider';


const Routers = () => {
    const auth = useAuth();

    return (
        <div className="App">
            <header className="App-header">
                <h4>Messenger</h4>
                <List sx={{ display: 'flex', fontSize: '24px'}}>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/chats">Chats</Link></ListItem>
                    <ListItem><Link to="/profile">Profile</Link></ListItem>
                    <ListItem><Link to="/word">Word</Link></ListItem>
                    { auth.user ? <></> : <ListItem><Link to="/login">Login</Link></ListItem> }
                    { auth.user ? <></> : <ListItem><Link to="/reg">Registration</Link></ListItem> }
                </List>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/word" element={<Word />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/reg" element={<Registration />}/>

                    <Route element={<RequireAuth />}>
                        <Route path="/chats/:chatId" element={<Chats/>}/>
                        <Route path="/chats" element={<Chats/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                    
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </header>
        </div>
    )
}

export default Routers;