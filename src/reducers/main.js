/*eslint-disable*/
import Actions from '../actions/actionTypes';

const nameInitialState = {
  showModal: false,
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
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};
