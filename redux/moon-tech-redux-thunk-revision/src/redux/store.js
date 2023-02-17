import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { filterReducer } from './reducers/filterReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
