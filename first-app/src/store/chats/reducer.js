import {ADD_CHAT, DELETE_CHAT} from "./actions";


const initialState = {
    chatList: [{
        id: 'id0',
        name: 'Test Chat'
    }]
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
            const index = +action.payload.slice(-1);
            delete state.chatList[index];
            return state;

        default:
            return state;
    }
}

export default chatsReducer;