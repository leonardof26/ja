import { combineReducers } from 'redux';
import { reducer as authentication } from './authentication';
import { reducer as user } from './user';
import { reducer as positions } from './positions';

const reducers = combineReducers({
  default: () => [],
  authentication,
  positions,
  user,
});

export default reducers;
