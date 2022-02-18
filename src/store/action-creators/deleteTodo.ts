import { DeleteTodoActionCreator } from "../../types/actionCreatorType";
import { TodoActionType } from "../../types/actionsType";

export const deleteTodo: DeleteTodoActionCreator = (todo) => {
    return {
        type: TodoActionType.DELETE_TODO,
        todo,
    };
};
