import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;
