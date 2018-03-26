import findUsers from "./findUsers";
import store from "./getStore";
import {updateSearchFilter} from "../actionCreators/resultsActions";

export default async function loadContent(e) {
    let stateFilter = (!e || !e.state || !e.state.filter) ? null : e.state.filter;
    console.log({stateFilter});
    await store.dispatch(null === stateFilter ? {type: 'RESET_FILTER'} : {
        type: 'REGENERATE_FILTER',
        payload: stateFilter
    });
    let hash = window.location.hash;
    let userIdMatch = hash.match(/^#?\/person\/(\d+)$/);
    if (userIdMatch && userIdMatch[1]) {
        let foundUsers = await findUsers({id: +userIdMatch[1]});
        let user = foundUsers[0];
        if (!!user) {
            await store.dispatch({type: 'SET_USER', payload: user});
        } else {
            await store.dispatch({type: 'SET_NO_USER'});
        }
    } else {
        await store.dispatch({
            type: 'SET_NO_USER'
        });
    }
    store.dispatch(updateSearchFilter());
}