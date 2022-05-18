// external imports
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// root reducer import
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
