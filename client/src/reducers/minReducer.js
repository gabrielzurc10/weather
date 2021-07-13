import { FETCH_MIN } from '../actions/types';

const minReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_MIN:
      return action.payload;
    default:
      return state;
  }
};

export default minReducer;
