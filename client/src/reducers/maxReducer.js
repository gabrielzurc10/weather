import { FETCH_MAX } from '../actions/types';

const maxReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_MAX:
      return action.payload;
    default:
      return state;
  }
};

export default maxReducer;
