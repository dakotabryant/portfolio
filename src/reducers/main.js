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
    default:
      return state;
  }
};
