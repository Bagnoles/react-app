import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import firebase from '../../services/firebase';
import {AUTHORS} from "../../constants/common";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHORS.bot) {
        const botMessage = {
            text: "Hello!!!",
            author: AUTHORS.bot
        }
        setTimeout( () => {
            dispatch(addMessage(chatId, botMessage))
        }, 1500)
    }
}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res)=> {
        console.log('messages added', res);
      });
}

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
  })

export const getMessagesByChatIdWithFB = (chatId) => (dispatch) => {
    const db = getDatabase(firebase);
    const messagesRef = ref(db, `/messages/${chatId}`);
    onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const messages = data && Object.values(data);
        if (messages?.length > 0) {
          dispatch(updateMessages(chatId, messages))
        }
      })
}