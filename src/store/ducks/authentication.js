import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getAuthenticationRequest: ['values', 'nav'],
  getAuthenticationSuccess: ['user'],
  getAuthenticationFailure: ['message'],
});

export const AuthenticationTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  user: null,
  error: false,
});

/* Reducers */

const getAuthenticationRequest = (state) => state.merge({
  ...state,
  loading: true,
  error: false
});

const getAuthenticationSuccess = (state, { user }) => state.merge({
  user,
  loading: false,
  error: false,
});

const getAuthenticationFailure = (state, { message }) => state.merge({
  ...state,
  error: message,
  loading: false,
  user: null
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_AUTHENTICATION_REQUEST]: getAuthenticationRequest,
  [Types.GET_AUTHENTICATION_SUCCESS]: getAuthenticationSuccess,
  [Types.GET_AUTHENTICATION_FAILURE]: getAuthenticationFailure,
});
