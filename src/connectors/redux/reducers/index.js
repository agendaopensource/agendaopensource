import { combineReducers } from 'redux';

import counter from './counter';
import menu from './menu';
import drawer from './drawer';

const reducer = combineReducers({
  counter,
  menu,
  drawer,
});

export default reducer;
