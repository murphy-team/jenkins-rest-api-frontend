import {combineReducers} from "redux";
import {ToDoPageReducer, ToDoPageState} from "./ToDoPageReducer";
import {ToDoPageReducerII, ToDoPageStateII} from "./ToDoPageReducerII";
import {WelcomePageReducer, WelcomePageState} from "./WelcomePageReducer";
import {NavigationBarComponentReducer, NavigationBarComponentState} from "./NavigationBarComponentReducer";

export default combineReducers <IReducers> ({
    NavigationBarComponentReducer,
    ToDoPageReducer,
    ToDoPageReducerII,
    WelcomePageReducer,
});

export interface IReducers {
    NavigationBarComponentReducer: NavigationBarComponentState
    ToDoPageReducer: ToDoPageState
    ToDoPageReducerII: ToDoPageStateII
    WelcomePageReducer: WelcomePageState
}