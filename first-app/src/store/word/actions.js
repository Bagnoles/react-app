import {API_URL_WORD} from "../../constants/common";

export const GET_WORD_REQUEST = 'WORD::GET_WORD_REQUEST';
export const GET_WORD_SUCCESS = 'WORD::GET_WORD_SUCCESS';
export const GET_WORD_FAILURE = 'WORD::GET_WORD_FAILURE';


export const getWordRequest = () => ({
    type: GET_WORD_REQUEST
});

export const getWordSuccess = (word) => ({
    type: GET_WORD_SUCCESS,
    payload: word
});

export const getWordFailure = (error) => ({
    type: GET_WORD_FAILURE,
    payload: error
});

export const getAllWord = () => async (dispatch) => {
    dispatch(getWordRequest());
    try {
        const response = await fetch(API_URL_WORD);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        dispatch(getWordSuccess(result));
    } catch (error) {
        dispatch(getWordFailure(error.message))
    }
}