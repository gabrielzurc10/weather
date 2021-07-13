import { FETCH_HUMID } from '../actions/types';

const humidReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_HUMID:
      return action.payload;
    default:
      return state;
  }
};

export default humidReducer;
