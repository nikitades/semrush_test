export function setSearchStr(str) {
    return {
        type: 'SET_SEARCH_STR',
        payload: str
    }
}

export function setAgeFrom(from) {
    return {
        type: 'SET_AGE_FROM',
        payload: from
    };
}

export function setAgeTo(to) {
    return {
        type: 'SET_AGE_TO',
        payload: to
    };
}

export function setGender(type) {
    return {
        type: 'SET_GENDER',
        payload: type
    }
}

export function setOccupation(occupation) {
    return {
        type: 'SET_OCCUPATION',
        payload: occupation
    }
}