/*eslint-disable*/
import Actions from '../actions/actionTypes';

const nameInitialState = {
  showOverlay: false,
};

export const mainReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case Actions.TEST_ACTION:
      return {
        ...state,
        testChange: 'hello',
      };
    case Actions.TOGGLE_MODAL:
      return {
        ...state,
        showOverlay: !state.showOverlay,
      };
    default:
      return state;
  }
};
