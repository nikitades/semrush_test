export default (state = null, action) => {
    switch (action.type) {
        case 'RESULTS_LOADING_START':
            return null;
        case 'RESULTS_LOADING_FINISH':
            return action.payload;
        default:
            return state;
    }
}