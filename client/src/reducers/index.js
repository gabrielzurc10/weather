import { combineReducers } from 'redux';
import dtReducer from './dtReducer';
import cityReducer from './cityReducer';
import tempReducer from './tempReducer';
import feelsReducer from './feelsReducer';
import iconReducer from './iconReducer';
import descriptionReducer from './descriptionReducer';

import maxReducer from './maxReducer';
import minReducer from './minReducer';
import humidReducer from './humidReducer';
import riseReducer from './riseReducer';
import setReducer from './setReducer';

export default combineReducers({
  dt: dtReducer,
  city: cityReducer,
  temp: tempReducer,
  feels: feelsReducer,
  icon: iconReducer,
  desc: descriptionReducer,

  max: maxReducer,
  min: minReducer,
  humid: humidReducer,
  rise: riseReducer,
  set: setReducer
});
