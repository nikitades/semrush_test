import findUsers from "../helpers/findUsers";
import store from '../helpers/getStore';

const UPDATE_INTERVAL = 1000;
let filterUpdatingTimeout = setTimeout(null, 0);
let lastParameters;
let lastResult;

export function updateSearchFilter() {
    let friendsParam = store.getState().currentUser ? {
        inFriendsList: store.getState().currentUser.friends
    } : {};
    const parameters = {
        ...store.getState().filter,
        ...friendsParam
    };
    window.history.replaceState({filter: parameters}, document.title);
    return async dispatch => {
        clearTimeout(filterUpdatingTimeout);
        await dispatch({
            type: 'RESULTS_LOADING_START'
        });
        let strParameters = JSON.stringify(parameters);
        if (strParameters === lastParameters) return await dispatch({ //to check if there is no need to make a new search
            type: 'RESULTS_LOADING_FINISH',
            payload: lastResult
        });
        filterUpdatingTimeout = setTimeout(async () => {
            lastParameters = strParameters;
            let result = lastResult = await findUsers(parameters);
            dispatch({
                type: 'RESULTS_LOADING_FINISH',
                payload: result
            });
        }, UPDATE_INTERVAL);
    }
}