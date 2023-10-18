import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducers } from './reducers';

const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
