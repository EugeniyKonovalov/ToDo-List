import { complete, incomplete } from "./storeType";
import {
  DeleteTodoActionCreator,
  CompleteActionCreator,
  IncompleteActionCreator,
} from "./actionCreatorType";

interface AppPropType {
  complete: complete;
  incomplete: incomplete;
  deleteTodo: DeleteTodoActionCreator;
  todoComplete: CompleteActionCreator;
  todoIncomplete: IncompleteActionCreator;
}

export default AppPropType;
