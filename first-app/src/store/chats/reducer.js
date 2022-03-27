import {ADD_CHAT, DELETE_CHAT, CHATS_UPDATE} from "./actions";


const initialState = {
    chatList: []
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:

            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            }
        case DELETE_CHAT:

            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.payload),
                    ...state.chatList.slice(action.payload + 1)
                ]
            }
        case CHATS_UPDATE:
            
            return {
                ...state,
                chatList: action.chats
            }

        default:
            return state;
    }
}

export default chatsReducer;