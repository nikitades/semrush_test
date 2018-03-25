export default (state = null, action) => {
    if (action.type === 'REGISTER_ERROR') return action.payload;
    return state;
}