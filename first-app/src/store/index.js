import {combineReducers, createStore} from "redux";
import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";


const reducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;