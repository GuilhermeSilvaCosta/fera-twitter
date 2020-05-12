export function userRequest(email, password) {
    return {
        type: '@user/USER_REQUEST'
    };
}

export function updateUserRequest(data) {
    return {
        type: '@user/UPDATE_USER_REQUEST',
        payload: { data }
    }
}

export function userSuccess(user) {
    return {
        type: '@auth/USER_SUCCESS',
        payload: { user },
    };
}