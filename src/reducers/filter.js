const defaultState = {
    searchStr: null,
    age: {
        from: null,
        to: null
    },
    gender: null,
    occupation: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_SEARCH_STR':
            return {
                ...state,
                searchStr: action.payload
            };
        case 'SET_AGE_FROM':
            return {
                ...state,
                age: {
                    ...state.age,
                    from: action.payload
                }
            };
        case 'SET_AGE_TO':
            return {
                ...state,
                age: {
                    ...state.age,
                    to: action.payload
                }
            };
        case 'SET_GENDER':
            return {
                ...state,
                gender: action.payload
            };
        case 'SET_OCCUPATION':
            return {
                ...state,
                occupation: action.payload
            };
        case 'RESET_FILTER':
            return defaultState;
        case 'REGENERATE_FILTER':
            return action.payload;
    }
}