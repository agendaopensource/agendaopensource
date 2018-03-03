import { combineReducers } from 'redux';

import menu from './menu';
import drawer from './drawer';

const reducer = combineReducers({
  menu,
  drawer,
});

export default reducer;
