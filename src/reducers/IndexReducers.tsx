import {combineReducers} from "redux";
import {JobPageReducer, JobPageState} from "./JobPageReducer";

export default combineReducers <IReducers> ({
    JobPageReducer: JobPageReducer,
});

export interface IReducers {
    JobPageReducer: JobPageState
}