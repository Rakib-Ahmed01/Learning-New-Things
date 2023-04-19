"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const actionTypes = {
    DECREMENT: 'DECREMENT',
    INCREMENT: 'INCREMENT',
};
const initialState = {
    count: 0,
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign(Object.assign({}, state), { count: state.count + action.payload });
        case actionTypes.DECREMENT:
            return Object.assign(Object.assign({}, state), { count: state.count - action.payload });
        default:
            return state;
    }
};
const store = (0, redux_1.createStore)(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({
    type: actionTypes.INCREMENT,
    payload: 5,
});
store.dispatch({
    type: actionTypes.DECREMENT,
    payload: 555,
});
