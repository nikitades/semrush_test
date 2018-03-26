export default (state = 'fetching', action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'SET_NO_USER':
            return null;
        case 'SET_WRONG_USER':
            return 'wrong';
        case 'FETCHING_USER':
            return 'fetching';
        default:
            return state;
    }
}