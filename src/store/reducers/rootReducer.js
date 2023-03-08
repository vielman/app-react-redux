import { combineReducers } from "redux";
import { todosReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers(
    {
        todosStates: todosReducer,
        filterStates: filterReducer,
        userStates: userReducer
    }
)