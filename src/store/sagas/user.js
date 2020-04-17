import { call, put } from 'redux-saga/effects';
import api from '@/services/api';

import UserActions from '@/store/ducks/user';
import storage from '@/utils/storage';

export function* getUserRequest() {
  try {
    const endpoint = '/users/me';
    const { data } = yield call(api.get, endpoint);


    const account = yield call(api.get, `/accounts/${data.account}`);

    yield put(UserActions.getUserSuccess({ ...account.data, email: data.email, role: data.role.type }));
  } catch (error) {
    console.log('ERROR GETUSER: ', error);
    storage.removeToken();
    yield put(UserActions.getUserFailure());
  }
}

export function* updateUserRequest(payload) {
  console.log(payload);
  try {
    const endpoint = `/accounts/${payload.user}`;
    const { data } = yield call(api.put, endpoint, payload.values);
    yield put(UserActions.updateUserSuccess(data));

    getUserRequest();

    if (payload.navigation) {
      payload.navigation.navigate(payload.navigation.page);
    }
  } catch (error) {
    // console.log(error);
    yield put(UserActions.updateUserFailure({ message: error.message }));
  }
}