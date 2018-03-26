import findUsers from "./findUsers";
import store from "./getStore";
import {updateSearchFilter} from "../actionCreators/resultsActions";
import regenFilters from "./regenFilters";

export default async function loadContent(e) {
    await regenFilters(e);
    let hash = window.location.hash;
    let userIdMatch = hash.match(/^#?\/person\/(\d+)$/);
    if (userIdMatch && userIdMatch[1]) {
        let foundUsers = await findUsers({id: +userIdMatch[1]});
        let user = foundUsers[0];
        if (!!user) {
            await store.dispatch({type: 'SET_USER', payload: user});
        } else {
            await store.dispatch({type: 'SET_WRONG_USER'});
        }
    } else {
        await store.dispatch({
            type: 'SET_NO_USER'
        });
    }
    store.dispatch(updateSearchFilter());
}