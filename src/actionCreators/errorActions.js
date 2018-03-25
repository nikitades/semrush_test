export function registerError(e) {
    return {
        type: 'REGISTER_ERROR',
        payload: e
    }
}