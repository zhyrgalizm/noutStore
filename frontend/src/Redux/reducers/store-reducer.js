
import { setLSToken } from '../../LocalStorage';
import { hakatonApi } from './../../API/Index';


const initialState = {
    isLoading: false,
    email: null,
    password: null,
    username: null,
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_TOKEN = 'SET_TOKEN'


const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setToken = (token) => ({ type: SET_TOKEN, token })



export const singIn = (userData) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    hakatonApi.signIn(userData)
        .then(response => {
            dispatch(setToken(response.auth_token))
            setLSToken(response.auth_token)
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}
export const signUp = (userData, navigate) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    hakatonApi.signUp(userData)
        .then(response => {
            console.log(response);
            navigate('/login')
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}




export default storeReducer