/*
 * @author GennadySX
 * @created at 2022
 **/

import {combineReducers} from 'redux';
import {weatherSlice} from './reducers/weather/weather.reducer';

export const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
});
