import {combineReducers} from 'redux';

import menuReducer from './menu/menu.reducer'
import stateReducer from './state/state.reducer';

export default combineReducers({
  menu:menuReducer,
  projectState: stateReducer
});
