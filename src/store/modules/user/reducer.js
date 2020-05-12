import produce from 'immer';

const INITIAL_STATE = {
    data: null,
    loading: false
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@user/USER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@user/UPDATE_USER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@auth/USER_SUCCESS': {
                draft.data = action.payload.user;
                draft.loading = false;
                break;
            }
            default:
        }
    })
}