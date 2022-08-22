
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countriesReducer } from "../stor/reducers/countriesreducer";
import thunk from "redux-thunk";
import combineReducer from "./combineReducer";
const stor =createStore(
    combineReducer,composeWithDevTools(applyMiddleware(thunk))
)
export default stor;