/**
 * Get the current state, and change it across all the reducers returned value
 * passing the action to the reducer
 */
function executeReducers(currentState = {}, reducers, action) {
	for( let index in reducers ) {
		currentState[index] = reducers[index](currentState[index], action);
	}

	return currentState;
}

/**
 * Executes all the registered listeners, passing the currentState
 */
function callListeners(listeners, currentState) {
	return listeners.map(listener => listener(currentState));
}

/**
 * Action used to get the initial state for the store
 */
export const INITIAL_ACTION = {
	type: '@@initStore'
};

/**
 * This is a VERY, VERY, VERY simplified version of REDUX, only for interview and study purposes.
 * Its made this way to show a little bit the candidate skills on Javascript.
 *
 * @param reducers
 * @returns {{getState: (function(): *), subscribe: (function(*=): Number), dispatch: (function(*=))}}
 */
export default function createStore(reducers) {
	let listeners = [];

	let currentState = executeReducers(undefined, reducers, INITIAL_ACTION);

	return {
		getState: () => currentState,
		subscribe: (listener) => listeners.push(listener),
		dispatch: (action) => {
			const newState = executeReducers(currentState, reducers, action);

			currentState = Object.assign({}, newState);

			return callListeners(listeners, currentState);
		}
	};
}