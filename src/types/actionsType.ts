export enum TodoActionType {
	TODO_COMPLETE = "TODO_COMPLETE",
	TODO_INCOMPLETE = "TODO_INCOMPLETE",
	DELETE_TODO = "DELETE_TODO",
}

interface CompleteAction {
	type: TodoActionType.TODO_COMPLETE;
	todo: string;
}

interface IncompleteAction {
	type: TodoActionType.TODO_INCOMPLETE;
	todo: string;
}

interface deleteTodoAction {
	type: TodoActionType.DELETE_TODO;
	todo: string;
}

export type TodoAction = CompleteAction | IncompleteAction | deleteTodoAction


