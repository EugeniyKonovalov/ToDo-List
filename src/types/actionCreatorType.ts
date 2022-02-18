import { TodoAction } from "./actionsType";

export type CompleteActionCreator = (todo: string) => TodoAction;

export type IncompleteActionCreator = (todo: string) => TodoAction;

export type DeleteTodoActionCreator = (todo: string) => TodoAction;

