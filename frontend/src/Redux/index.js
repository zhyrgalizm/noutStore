import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import laptopReducer from "./reducers/items-reducer";
import storeReducer from "./reducers/store-reducer";



const rootReducer = combineReducers({
    user: storeReducer,
    laptop: laptopReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store