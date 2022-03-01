import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeNameAction} from "../store/profile/actions";
import {Checkbox} from "@mui/material";


const Profile = () => {
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(changeNameAction);
    }, [dispatch]);

    return  (
        <div>
            <p>User's profile</p>
            <Checkbox
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Name: </span>{showName && <span>{name}</span>}
        </div>
    )
}

export default Profile;