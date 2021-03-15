import { createStore, combineReducers } from 'redux';
import listReducer from './list-reducer';

let reducers = combineReducers({
	listPage: listReducer
});

let store = createStore(reducers);

window.store = store;

export default store;