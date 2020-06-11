import axios from 'axios';

export const FETCH_JOKES = 'FETCH_JOKES';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR = 'SET_ERROR';

export const getJokes = () => dispatch => {
    dispatch({ type: FETCH_JOKES });
    axios
        .get('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            dispatch({ type: UPDATE_JOKES, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: 'Oops... error fetching from api' })
        });
};