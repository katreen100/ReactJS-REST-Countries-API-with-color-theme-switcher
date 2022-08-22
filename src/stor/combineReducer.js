import { combineReducers } from "redux";
import { countriesReducer } from "./reducers/countriesreducer";
import { Darkmoodreducer } from "./reducers/darkmoodreducer";
import { countrydetailsReducer } from "./reducers/countryDetailsreducer";
export  default combineReducers({
apicall:countriesReducer,
darkmood:Darkmoodreducer,
countrydetails:countrydetailsReducer
})