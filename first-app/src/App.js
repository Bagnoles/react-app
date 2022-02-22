import './App.css';
import React from "react";

import {Routes, Route, Link} from "react-router-dom";

import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import {List, ListItem} from "@mui/material";
import Chats from "./pages/Chats";


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h4>Messenger</h4>
                <List sx={{ display: 'flex', fontSize: '24px' }}>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/chats">Chats</Link></ListItem>
                    <ListItem><Link to="/profile">Profile</Link></ListItem>
                </List>
                <Routes>
                    <Route path="/chats/:chatId" element={<Chats/>}/>
                    <Route path="/chats" element={<Chats/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </header>
        </div>
    );
}

export default App;
