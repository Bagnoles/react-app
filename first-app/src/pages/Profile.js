import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeNameAction} from "../store/profile/actions";
import {Checkbox, Button} from "@mui/material";
import useAuth from '../hooks/AuthProvider';


const Profile = () => {
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const auth = useAuth();

    const setShowName = useCallback(() => {
        dispatch(changeNameAction);
    }, [dispatch]);

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
            <Button variant="outlined" onClick={loginOut}>Выйти из аккауна</Button>
        </div>
    )
}

export default Profile;