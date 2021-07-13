import { FETCH_FEELS } from '../actions/types';

const feelsReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_FEELS:
      return action.payload;
    default:
      return state;
  }
};

export default feelsReducer;
