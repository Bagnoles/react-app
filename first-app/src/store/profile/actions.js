import { getDatabase, ref, push, set } from "firebase/database";
import firebase from "../../services/firebase";

export const TOGGLE_NAME_ACTION = 'PROFILE::TOGGLE_NAME_ACTION';
export const CHANGE_NAME_ACTION = 'PROFILE::CHANGE_NAME_ACTION';

export const toggleNameAction = {
    type: TOGGLE_NAME_ACTION
}

export const changeNameAction = (name) => ({
    type: CHANGE_NAME_ACTION,
    payload: name
})

export const changeNameWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const profileRef = ref(db, '/profiles');
    const newNameRef = push(profileRef);
    set(newNameRef, { name: name }).then(res => {
        console.log('name added', res);
      });
}

