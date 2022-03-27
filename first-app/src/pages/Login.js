import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();
    let location = useLocation();

    const auth = useAuth();

    let from = location.state?.from?.pathname || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const loginUser = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            await auth.signin({ email, password }, () => {
                navigate(from, { replace: true });
            });
        } catch (e) {
            setError(e);
            console.error(e);
        }
      };


    return (
        <div>
            <p>Введите данные для входа в аккаунт</p>
            <form onSubmit={loginUser}>
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
                <Button variant="outlined" type="submit">Войти</Button>
            </form>
        </div>
    )
}

export default Login;