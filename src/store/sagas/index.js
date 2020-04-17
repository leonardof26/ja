import {
  all,
  takeLatest,
} from 'redux-saga/effects';

import { AuthenticationTypes } from '../ducks/authentication';
import { getAuthenticationRequest } from './authentication';


import { UserTypes } from '../ducks/user';
import { PositionsTypes } from '../ducks/positions';

import { getUserRequest } from './user';
import { getPositionsRequest } from './positions';

import { updateUserRequest } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthenticationTypes.GET_AUTHENTICATION_REQUEST, getAuthenticationRequest),
    takeLatest(UserTypes.GET_USER_REQUEST, getUserRequest),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUserRequest),
    takeLatest(PositionsTypes.GET_POSITIONS_REQUEST, getPositionsRequest)
  ]);
}
