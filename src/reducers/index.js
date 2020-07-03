import loggedReducer from './logged';
import stockReducer from './stocks';
import incomeReducer from './incomeReducer';
import counterReducer from './counter';
import soldReducer from './soldReducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    logged:loggedReducer,
    stock:stockReducer,
    income:incomeReducer,
    count:counterReducer,
    sold:soldReducer
});

export default reducers;