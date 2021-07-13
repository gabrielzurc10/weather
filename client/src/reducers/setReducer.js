import { FETCH_SET } from '../actions/types';

const setReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_SET:
      return action.payload;
    default:
      return state;
  }
};

export default setReducer;
