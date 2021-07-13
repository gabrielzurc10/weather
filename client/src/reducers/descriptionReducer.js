import { FETCH_DESCRIPTION } from '../actions/types';

const descriptionReducer = (state = null, action) => {

  switch (action.type) {
    case FETCH_DESCRIPTION:
      return action.payload;
    default:
      return state;
  }
};

export default descriptionReducer;
