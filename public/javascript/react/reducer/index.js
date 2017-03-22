import {combineReducers} from 'redux';
import {reducer1,items} from './reducer1.js';


const allReducers = combineReducers({
    users: reducer1,
    items: items

});

export default allReducers;