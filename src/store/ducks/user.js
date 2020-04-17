import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  updateUserRequest: ['user', 'values', 'navigation'],
  updateUserSuccess: [],
  updateUserFailure: ['message'],

  getUserRequest: [],
  getUserSuccess: ['data'],
  getUserFailure: ['message'],
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  user: null,
  error: false,
});

/* Reducers */

const updateUserRequest = (state) => state.merge({
  ...state,
  loading: true,
  error: false
})


const updateUserSuccess = (state) => state.merge({
  ...state,
  loading: false,
  error: false
})

const updateUserFailure = (state, { message }) => state.merge({
  ...state,
  loading: false,
  error: message
})

const getUserRequest = (state) => state.merge({
  ...state,
  loading: true,
  error: false
});

const getUserSuccess = (state, { data }) => state.merge({
  data,
  loading: false,
  error: false,
});

const getUserFailure = (state) => state.merge({
  ...state,
  error: true,
  loading: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {

  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,

  [Types.GET_USER_REQUEST]: getUserRequest,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
});
