import {combineReducers} from 'redux';
import {reducer1,items,voteResults,showItems} from './reducer1.js';


const allReducers = combineReducers({
    users: reducer1,
    items: items,
    voteResults: voteResults,
    showItems: showItems

});

export default allReducers;