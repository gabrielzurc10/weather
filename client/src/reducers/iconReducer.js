import { FETCH_ICON } from '../actions/types';

const iconReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_ICON:
      return action.payload;
    default:
      return state;
  }
};

export default iconReducer;
