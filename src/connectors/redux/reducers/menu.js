import { SET_MENU_ACTIVE } from '../actions/menu';

const setMenuActive = (state, id) => state.map((item) => {
  const itemUpdated = item;
  itemUpdated.active = item.id === id;
  return itemUpdated;
});

export default (state = {}, action) => {
  switch (action.type) {
    case SET_MENU_ACTIVE:
      return setMenuActive(state, action.id);
    default:
      return state;
  }
};
