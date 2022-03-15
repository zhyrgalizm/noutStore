import { hakatonApi } from "../../API/Index";


const noutState = {
    laptopArr: [],
    laptopDetail: {},
}
const SET_LAPTOP_ARR = 'SET_LAPTOP_ARR'
const SET_LAPTOP_INFO = 'SET_LAPTOP_INFO'



const laptopReducer = (state = noutState, action) => {
    switch (action.type) {
        case SET_LAPTOP_INFO:
            return {
                ...state,
                laptopDetail: action.laptopDetail
            }

        case SET_LAPTOP_ARR:
            return {
                ...state,
                laptopArr: action.laptopArr
            }
        default:
            return state;
    }
}

export const setLaptop = (laptopArr) => ({ type: SET_LAPTOP_ARR, laptopArr })
export const setLaptopInfo = (laptopDetail) => ({ type: SET_LAPTOP_INFO, laptopDetail })

export const getById = (id) => (dispatch) => {
    hakatonApi.getAllById(id)
        .then(response => dispatch(setLaptopInfo(response)))
        .catch(err => console.log(err))

}

export const getByName = (value) => (dispatch) => {
    hakatonApi.getAllByName(value)
        .then(response => dispatch(setLaptop(response)))
        .catch(err => console.log(err))
}


export const getAlllaptops = () => (dispatch) => {
    hakatonApi.getAllItems()
        .then(response => dispatch(setLaptop(response)))
        .catch(err => console.log(err))
}

export default laptopReducer