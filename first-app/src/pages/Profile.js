import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {toggleNameAction, changeNameAction, changeNameWithFB} from "../store/profile/actions";
import {Checkbox, Button, TextField} from "@mui/material";
import useAuth from '../hooks/AuthProvider';


const Profile = () => {
    const { showName, name } = useSelector((state) => state.profile);
    const [newName, setNewName] = useState("");
    const dispatch = useDispatch();
    const auth = useAuth();

    const setShowName = useCallback(() => {
        dispatch(toggleNameAction);
    }, [dispatch]);

    const handleInput = (e) => {
        setNewName(e.target.value);
    }

    const changeName = () => {
        dispatch(changeNameAction(newName));
        dispatch(changeNameWithFB(newName));
        setNewName('');
    };


    const loginOut = async () => {

        try {
            await auth.signout();
        } catch (e) {
            console.error(e);
        }
    }

    return  (
        <div>
            <p>User's profile</p>
            <Checkbox
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Name: </span>{showName && <span>{name}</span>}
            <br />
            <p>Change name to</p>
            <TextField id="outlined-basic" label="Введите имя" variant="outlined" value={newName} onChange={handleInput} />
            <Button variant="outlined" onClick={changeName}>Change</Button>
            <br /> 
            <Button variant="outlined" onClick={loginOut}>Выйти из аккауна</Button>
        </div>
    )
}

export default Profile;