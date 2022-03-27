import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database';
import firebase from '../../services/firebase';


export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const CHATS_UPDATE = "CHATS::CHATS_UPDATE"

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: chatName
});

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
  })

export const deleteChat = (index) => ({
    type: DELETE_CHAT,
    payload: index
})

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatsRef = ref(db, '/chats');
    const newChatsRef = push(chatsRef);
    set(newChatsRef, { name: name }).then(res => {
        console.log('chat added', res);
      });
}

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => {
        console.log('Chat Removed', res);
      })
      remove(messagesRef).then(res => {
        console.log('Messages deleted', res);
      });
}

export const initTrackerWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));
      })
}