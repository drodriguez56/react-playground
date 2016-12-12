import { combineReducers } from 'redux';
import WheatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WheatherReducer
});

export default rootReducer;
