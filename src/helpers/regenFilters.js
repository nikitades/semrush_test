import store from "./getStore";

export default async function regenFilters(e) {
    let historyFilter = (!e || !e.state || !e.state.filter) ?
        (!window.history || !window.history.state || !window.history.state.filter) ? null : window.history.state.filter :
        e.state.filter;
    return store.dispatch((null === historyFilter || JSON.stringify(historyFilter) === '{}') ? {type: 'RESET_FILTER'} : {
        type: 'REGENERATE_FILTER',
        payload: historyFilter
    });
}