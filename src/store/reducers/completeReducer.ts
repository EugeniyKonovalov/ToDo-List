import { Reducer } from "redux";
import {
  TodoAction
} from "../../types/actionsType";
import { complete } from "../../types/storeType";
import { TodoActionType } from "../../types/actionsType";

const initialState: complete = [];

const completeReducer: Reducer<
  complete,
  TodoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionType.TODO_COMPLETE:
      return [...state, action.todo];
    case TodoActionType.TODO_INCOMPLETE:
    case TodoActionType.DELETE_TODO:
      return [...state.filter((todo) => todo !== action.todo)];
    default:
      return [...state];
  }
};

export default completeReducer;
