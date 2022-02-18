import { IncompleteActionCreator } from "../../types/actionCreatorType";
import { TodoActionType } from "../../types/actionsType";

export const todoIncomplete: IncompleteActionCreator = (todo) => {
    return {
        type: TodoActionType.TODO_INCOMPLETE,
        todo,
    };
};
