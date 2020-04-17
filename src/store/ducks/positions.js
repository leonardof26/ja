import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getPositionsRequest: [],
  getPositionsSuccess: ['data'],
  getPositionsFailure: [],
});

export const PositionsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
  error: false,
});

/* Reducers */

const getPositionsRequest = (state) => state.merge({
  ...state,
  loading: true,
});

const getPositionsSuccess = (state, { data }) => state.merge({
  data,
  loading: false,
  error: false,
});

const getPositionsFailure = (state) => state.merge({
  ...state,
  error: true,
  loading: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POSITIONS_REQUEST]: getPositionsRequest,
  [Types.GET_POSITIONS_SUCCESS]: getPositionsSuccess,
  [Types.GET_POSITIONS_FAILURE]: getPositionsFailure,
});
