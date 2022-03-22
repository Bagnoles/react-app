import {GET_WORD_FAILURE, GET_WORD_REQUEST, GET_WORD_SUCCESS} from "./actions";

const initialState = {
    word: [],
    request: false,
    success: false,
    error: false
}

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORD_REQUEST:
            return {
                ...state,
                request: true,
                success: false,
                error: false
            }
        case GET_WORD_SUCCESS:
            return {
                ...state,
                word: action.payload,
                request: false,
                success: true,
                error: false
            }
        case GET_WORD_FAILURE:
            return {
                ...state,
                request: false,
                success: false,
                error: true
            }
        default:
            return state;
    }
}

export default wordReducer;
