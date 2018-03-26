import store from "./getStore";
import loadUser from "./loadContent";

window.onpopstate = async e => {
    let hash = e.target.location.hash;
    if (['', '/'].indexOf(hash) !== -1) store.dispatch({
        type: 'REGENERATE_FILTER',
        payload: e.state.filter || {}
    });
};

let lastUrl;

export default async function navigateTo(url = '#/', filter = {}) {
    let method = url === lastUrl ? 'replaceState' : 'pushState';
    //TODO: восстанавливать фильтр если переходим на главную
    window.history[method]({filter}, document.title, lastUrl = url);
    return loadUser();
}