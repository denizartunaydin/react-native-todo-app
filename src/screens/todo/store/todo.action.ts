import {Todo} from '../../../dtos/todo';

export const GET_TODO = 'GET_TODO';
interface GetTodoActionType {
  type: typeof GET_TODO;
}

export const SELECT_TODO = 'SELECT_TODO';
interface SelectTodoActionType {
  type: typeof SELECT_TODO;
  payload: Todo | null;
}

export const ADD_TODO = 'ADD_TODO';
interface AddTodoActionType {
  type: typeof ADD_TODO;
  payload: Todo;
}

export const UPDATE_TODO = 'UPDATE_TODO';
interface UpdateTodoActionType {
  type: typeof UPDATE_TODO;
  payload: Todo;
}

export const DELETE_TODO = 'DELETE_TODO';
interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: string;
}

export type TodoActionTypes =
  | GetTodoActionType
  | SelectTodoActionType
  | AddTodoActionType
  | UpdateTodoActionType
  | DeleteTodoActionType;

export function getTodo(): TodoActionTypes {
  return {
    type: GET_TODO,
  };
}

export function selectTodo(payload: Todo | null): TodoActionTypes {
  return {
    type: SELECT_TODO,
    payload: payload,
  };
}

export function addTodo(payload: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: payload,
  };
}

export function updateTodo(payload: Todo): TodoActionTypes {
  return {
    type: UPDATE_TODO,
    payload: payload,
  };
}

export function deleteTodo(payload: string): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
}
