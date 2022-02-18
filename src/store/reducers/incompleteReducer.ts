import { Reducer } from "redux";

import {
  TodoActionType,
  TodoAction
} from "../../types/actionsType";

import { incomplete } from "../../types/storeType";

const initialState: incomplete = [];

const incompleteReducer: Reducer<
  incomplete,
  TodoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionType.TODO_INCOMPLETE:
      return [...state, action.todo];
    case TodoActionType.DELETE_TODO:
    case TodoActionType.TODO_COMPLETE:
      return [...state.filter((todo) => todo !== action.todo)];
    default:
      return [...state];
  }
};

export default incompleteReducer;
