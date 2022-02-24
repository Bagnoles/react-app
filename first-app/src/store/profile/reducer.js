import { CHANGE_NAME_ACTION } from './actions'

const initialState = {
    showName: false,
    name: 'Anna'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer;
