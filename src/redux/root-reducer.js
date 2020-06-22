import { combineReducers } from 'redux';

import userReducer from './user/users.reducer';

export default combineReducers({
  user: userReducer,
});
