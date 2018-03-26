import {combineReducers} from 'redux';
import filter from "./filter";
import results from "./results";
import error from "./error";
import currentUser from "./currentUser";

export default combineReducers({
    filter,
    results,
    error,
    currentUser
});