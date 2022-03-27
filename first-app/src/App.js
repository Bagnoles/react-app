import './App.css';
import React from 'react';
import { AuthProvider } from './hooks/AuthProvider';
import Routers from './pages/Routers'

const App = () => {

    return (
        <AuthProvider>
            <Routers />
        </AuthProvider>
    )
}

export default App;
