import React, { useState } from 'react';
import firebase from '../services/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    
    let [user, setUser] = useState();

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callback();
      };

    let signout = async (callback) => {
        const auth = getAuth(firebase);
        await signOut(auth);
        setUser(null);
        callback();
    }; 
    
    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;