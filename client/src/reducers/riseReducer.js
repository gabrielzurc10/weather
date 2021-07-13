import { FETCH_RISE } from '../actions/types';

const riseReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_RISE:
      return action.payload;
    default:
      return state;
  }
};

export default riseReducer;
