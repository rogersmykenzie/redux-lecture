import {createStore, combineReducers, applyMiddleware} from 'redux';
import starWarsReducer from './reducers/starWarsReducer';
import promise from 'redux-promise-middleware';

export default createStore(starWarsReducer, applyMiddleware(promise));