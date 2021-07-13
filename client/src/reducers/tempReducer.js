import { FETCH_TEMP } from '../actions/types';

const tempReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_TEMP:
      return action.payload;
    default:
      return state;
  }
};

export default tempReducer;
