import { FETCH_CITY } from '../actions/types';

const cityReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_CITY:
      return action.payload;
    default:
      return state;
  }
};

export default cityReducer;
