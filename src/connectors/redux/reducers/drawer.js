import { TOGGLE_DRAWER } from '../actions/drawer';

const initialState = {
  open: false,
};

const toggleDrawer = state => ({
  ...state,
  open: !state.open,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return toggleDrawer(state);
    default:
      return state;
  }
};
