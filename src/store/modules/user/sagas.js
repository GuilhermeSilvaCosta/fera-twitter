import { takeLatest, all, call, put } from 'redux-saga/effects';
import { userSuccess } from './actions'

import api from 'services/api';

export function* requestUser() {
    const response = yield call(api.get, 'users');

    const user = response.data;

    yield put(userSuccess(user));
}

export function* updateUser({ payload }) {

    const response = yield call(api.put, `users/${payload.data._id}`, payload.data);

    yield put(userSuccess(response.data));
}

export default all([
    takeLatest('@user/USER_REQUEST', requestUser),
    takeLatest('@user/UPDATE_USER_REQUEST', updateUser)
]);