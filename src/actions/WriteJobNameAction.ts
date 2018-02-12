import {ActionConstants} from "./ActionConstants";

export interface IWriteJobNameAction {
    type: string;
    jobName: string
}

export function WriteJobNameAction(jobName: string): IWriteJobNameAction {
    return {
        type: ActionConstants.WRITE_JOB_NAME    ,
        jobName: jobName
    };
}