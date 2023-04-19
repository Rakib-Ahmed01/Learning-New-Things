import { createStore, Store } from 'redux';

interface State {
  count: number;
}

interface Action {
  type: string;
  payload: number;
}

interface ActionTypes {
  INCREMENT: string;
  DECREMENT: string;
}

const actionTypes: ActionTypes = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
};

const initialState: State = {
  count: 0,
};

const counterReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const store: Store<State, Action> = createStore(counterReducer);

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
