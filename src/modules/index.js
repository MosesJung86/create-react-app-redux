import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import assessment from './assessment';

export default combineReducers({
  router: routerReducer,
  assessment
});
