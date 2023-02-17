import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartCounter } from './middlewares/cartCounter';
import { filterReducer } from './reducers/filterReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, cartCounter))
);

export default store;
