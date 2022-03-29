import {Todo} from '../../../dtos/todo';
import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  SELECT_TODO,
  TodoActionTypes,
  UPDATE_TODO,
} from './todo.action';

export interface TodoStateModel {
  todo: Todo[];
  selectedTodo: Todo | null;
  activeCount: number;
  doneCount: number;
}

const initialState: TodoStateModel = {
  todo: [],
  selectedTodo: null,
  activeCount: 0,
  doneCount: 0,
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoStateModel {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        activeCount: state.todo.filter(c => c.isChecked === false).length,
        doneCount: state.todo.filter(c => c.isChecked === true).length,
      };

    case SELECT_TODO:
      return {
        ...state,
        selectedTodo: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todo: state.todo.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(c => c.id !== action.payload),
      };

    default:
      return state;
  }
}
