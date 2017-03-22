import $ from 'jquery';
import {store} from "../../babel/store.js"


var userData=[
    {
        id:1,
        first:"leslie",
        age:10
    },
    {
        id:3,
        first:"les",
        age:100
    }
];

export const selectUser = (user) => {
    console.log("You clicked on user: ");
    return {
        type: 'USER_SELECTED',
        payload: userData
    }
};

export const submitData = (codedata) => {
    console.log(codedata);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload:   ($.ajax({
             method: "POST",
             data: {code: codedata},
             url: "/login",
             dataType: "json"
         }).then(function(data){
             console.log(data);
             console.log('back in ajax!');
             const action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
             };
             store.dispatch(action);
             return data;
         }))
    }
};

export const changeItem = (itemid) => {
    console.log("change select item ");
    return {
        type: 'CHANGE',
        payload: itemid
    }
};

export const submitSelectItem = (itemid) => {
    console.log("change select item ");
    console.log(itemid);
    return {
        type: 'SUBMIT_SELECT_ITEM',
        payload: ($.ajax({
            method: "POST",
            data: {selectItem: itemid},
            url: "/submitItem",
            dataType: "json"
        }).then(function(data){
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'INESERT_SUCCESS',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const queryResult = () => {
    console.log("Query result!");
  //  console.log(itemid);
    return {
        type: 'QUERY_RESULT_INIT',
        payload: ($.ajax({
            method: "POST",
            data: {type: 'query_data_result'},
            url: "/queryresult",
            dataType: "json"
        }).then(function(data){
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'QUERY_RESULT_FINISH',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};
