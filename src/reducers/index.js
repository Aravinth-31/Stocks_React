import loggedReducer from './logged';
import stockReducer from './stocks';
import incomeReducer from './incomeReducer';
import counterReducer from './counter';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    logged:loggedReducer,
    stock:stockReducer,
    income:incomeReducer,
    count:counterReducer
});

export default reducers;