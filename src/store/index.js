// external imports
import { createStore, applyMiddleware, compose } from 'redux';

// root reducer import
import rootReducer from './reducers';

// Middlewares
const middlewares = [];
// middlewares.push(any_middleware)

const configureStore = () => {
	// Middleware Enhancer
	const middlewareEnhancer = applyMiddleware(...middlewares);

	// Store configuration for Production
	if (process.env.NODE_ENV === 'production') {
		return createStore(rootReducer, undefined, compose(middlewareEnhancer));
	}

	// Enabling Redux Devtools only for development environment
	const composeEnhancers =
		typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
			? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
			: compose;

	// Store configuration for Development
	return createStore(rootReducer, undefined, composeEnhancers(middlewareEnhancer));
};

const store = configureStore();

export default store;
