import { UPDATE_SETTING } from './actions';

const initialState = {
  settings: {
    biasTolerance: 5,
    opposingViews: 5,
    sensationalism: 5,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTING:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.name]: parseInt(action.payload.value),
        },
      };
    default:
      return state;
  }
};

export default reducer;