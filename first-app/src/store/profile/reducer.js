import { TOGGLE_NAME_ACTION, CHANGE_NAME_ACTION } from './actions'

const initialState = {
    showName: false,
    name: 'Anna'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAME_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        case CHANGE_NAME_ACTION:
            return {
                ...state,
                name: action.payload
            }    
        default:
            return state;
    }
}

export default profileReducer;
