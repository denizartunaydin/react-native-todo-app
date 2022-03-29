import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {todoReducer} from '../screens/todo/store/todo.store';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const middleWareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleWareEnhancer);
export default store;
