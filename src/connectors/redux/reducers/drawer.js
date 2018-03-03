import { TOGGLE_DRAWER } from '../actions/drawer';

const initialState = {
  drawer: {
    open: false,
  },
};

const toggleDrawer = state => ({
  ...state,
  drawer: {
    open: !state.drawer.open,
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return toggleDrawer(state);
    default:
      return state;
  }
};
