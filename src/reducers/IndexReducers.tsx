import {combineReducers} from "redux";
import {NavigationBarComponentReducer, NavigationBarComponentState} from "./NavigationBarComponentReducer";

export default combineReducers <IReducers> ({
    NavigationBarComponentReducer,
});

export interface IReducers {
    NavigationBarComponentReducer: NavigationBarComponentState
}