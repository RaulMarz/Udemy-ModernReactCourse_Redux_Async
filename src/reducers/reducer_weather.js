import { FETCH_WEATHER } from '../Actions/index';

export default function (state = [], action){
    //console.log('Action received', action);
    switch(action.type){
        case    FETCH_WEATHER:
            //return state.concat ([action.payload.data]); Same as below but below is ES6
            return [action.payload.data, ...state];
        }
    return state;
}