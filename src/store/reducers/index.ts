import { combineReducers } from "redux";
import complete from "./completeReducer";
import incomplete from "./incompleteReducer";

export const rootReducer = combineReducers({
	complete,
	incomplete,
});
