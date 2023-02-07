import { combineReducers } from 'redux';
import Auth from './Reducers/Auth';
import userId from './Reducers/userId';

const reducers = combineReducers({
    Auth,
    userId
});

export default reducers;