import { FETCH_JOKES, UPDATE_JOKES, SET_ERROR } from "../actions";

const initialState = {
    jokes: [],
    isFetchingJokes: false,
    error: ''
};

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKES:
            return {
                ...state,
                isFetchingJokes: true,
                jokes: []
            };
        case UPDATE_JOKES:
            return {
                ...state,
                jokes: action.payload,
                isFetchingJokes: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingJokes: false,
                error: action.payload
            }
        default:
            return state;
    }
};