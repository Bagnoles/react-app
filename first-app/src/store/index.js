import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";


const reducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
export const persistor = persistStore(store);