import axios from 'axios';
import { FETCH_CITY, FETCH_TEMP, FETCH_FEELS, FETCH_ICON, FETCH_DESCRIPTION, FETCH_MAX, FETCH_MIN, FETCH_HUMID, FETCH_RISE, FETCH_SET } from './types';

export const fetchWeather = () => async dispatch => {
  const res = await axios.get('/api');

  try {
    dispatch({ type: FETCH_CITY, payload: res.data.name });
    dispatch({ type: FETCH_TEMP, payload: Math.trunc(res.data.main.temp)+"°F" });
    dispatch({ type: FETCH_FEELS, payload: "Feels like "+Math.trunc(res.data.main.feels_like)+"°" });
    dispatch({ type: FETCH_ICON, payload: res.data.weather[0].icon })
    dispatch({ type: FETCH_DESCRIPTION, payload: res.data.weather[0].description});
  } catch (err) {
    dispatch({ type: FETCH_DESCRIPTION, payload: "Location not found" });
    dispatch({ type: FETCH_ICON, payload: "00" })
  }
};

export const fetchDetails = () => async dispatch => {
  const res = await axios.get('/api');

  try {
    var sunrise = new Date(res.data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset = new Date(res.data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

    dispatch({ type: FETCH_MAX, payload: Math.trunc(res.data.main.temp_max)+"°" });
    dispatch({ type: FETCH_MIN, payload: Math.trunc(res.data.main.temp_min)+"°" });
    dispatch({ type: FETCH_HUMID, payload: res.data.main.humidity+"%" });
    dispatch({ type: FETCH_RISE, payload: sunrise })
    dispatch({ type: FETCH_SET, payload: sunset });
  } catch (err) {
    dispatch({ type: FETCH_ICON, payload: "00" });
  }
};
