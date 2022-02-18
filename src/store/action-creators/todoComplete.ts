import { CompleteActionCreator } from "../../types/actionCreatorType";
import { TodoActionType } from "../../types/actionsType";

export const todoComplete: CompleteActionCreator = (todo) => {
    return {
        type: TodoActionType.TODO_COMPLETE,
        todo,
    };
};
