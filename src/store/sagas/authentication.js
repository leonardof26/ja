import { call, put } from 'redux-saga/effects';
import api from '@/services/api';

import AuthenticationActions from '@/store/ducks/authentication';
import storage from '@/utils/storage';

export function* getAuthenticationRequest(payload) {
  try {
    const endpoint = '/auth/local';
    // const { data } = yield call(api.post, endpoint, payload.values);

    const data = {
      jwt: 'jkdskjdhskjdhskj',
      user: { account: 'adm', email: 'teste', role: { type: 'adm' } },
    };

    storage.setToken(data.jwt);

    yield put(
      AuthenticationActions.getAuthenticationSuccess({
        user: {
          ...data.user.account,
          email: data.user.email,
          role: data.user.role.type,
        },
      }),
    );

    if (data.user.account.first_access) {
      return payload.nav('Introduction');
    }

    return payload.nav('Home');
  } catch (error) {
    yield put(
      AuthenticationActions.getAuthenticationFailure({
        message: 'username ou senha incorreta.',
      }),
    );
  }
}
