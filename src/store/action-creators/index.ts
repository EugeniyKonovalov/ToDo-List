import *as CompleteActionCreator from './todoComplete'
import *as IncompleteActionCreator from './todoIncomplete'
import *as DeleteTodoActionCreator from './deleteTodo'


export default {
	...CompleteActionCreator,
	...IncompleteActionCreator,
	...DeleteTodoActionCreator
}






