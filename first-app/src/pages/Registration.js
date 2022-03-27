import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../services/firebase';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const regUser = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Вы зарегистрированы.');
          } catch (error) {
            setError(error.message);
          }
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <p>Введите данные для регистрации</p>
            <form onSubmit={regUser}>
                <TextField 
                    id="outlined-basic" 
                    label="Введите e-mail" 
                    variant="outlined"
                    value={email}
                    onChange={handleEmail} />
                <br />
                <TextField 
                    id="outlined-basic" 
                    type="password"
                    label="Введите пароль" 
                    variant="outlined"
                    value={password}
                    onChange={handlePassword} />
                <br />
                {error && <div>{error}</div>}
                <Button variant="outlined" type="submit">Зарегистрироваться</Button>
            </form>
        </div>
    )
}

export default Registration;