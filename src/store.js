import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';


let store = createStore(rootReducer);
let composeEnhancers;

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, composeEnhancers());
}

export default store;