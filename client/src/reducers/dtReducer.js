import { FETCH_DT } from '../actions/types';

const dtReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_DT:
      return action.payload;
    default:
      return state;
  }
};

export default dtReducer;