import { call, put } from 'redux-saga/effects';
import api from '@/services/api';

import PositionsActions from '@/store/ducks/positions';

export function* getPositionsRequest() {
  try {
    const endpoint = '/positions';
    const { data } = yield call(api.get, endpoint);
    console.log(data);
    yield put(PositionsActions.getPositionsSuccess(data));
  } catch (error) {
    // console.log(error);
    yield put(PositionsActions.getPositionsFailure());
  }
}
