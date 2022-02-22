import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";
import {BrowserRouter} from "react-router-dom";


const theme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        mode: 'dark'
    }
});


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


