import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {JobPageDTO} from "../domain/pages/JobPageDTO";
import {JobDTO} from "../domain/JobDTO";

export class JobPageState {
    _jobPageDTO: JobPageDTO;

    public constructor() {
        this._jobPageDTO = new JobPageDTO();
        this._jobPageDTO._jobDTO = new JobDTO();
        this._jobPageDTO._jobDTO._jobName = "";
        this._jobPageDTO._jobDTO._url = "";
    }
}

export function JobPageReducer(state: JobPageState = new JobPageState(), action: Action): JobPageState {
    let newState: JobPageState;

    switch (action.type) {
        case ActionConstants.WRITE_GIT_URL:
            let newGitUrlState = objectAssign({}, state._jobPageDTO, {});
            let gitUrlFromAction = action["gitUrl"];
            console.log("GIT URL", gitUrlFromAction);
            newGitUrlState._jobDTO._url = gitUrlFromAction;
            newState = objectAssign({}, state, {_jobPageDTO: newGitUrlState});
            return newState;
        case ActionConstants.WRITE_JOB_NAME:
            let newJobNameState = objectAssign({}, state._jobPageDTO, {});
            let jobNameFromAction = action["jobName"];
            console.log("job name", jobNameFromAction);
            newJobNameState._jobDTO._jobName = jobNameFromAction;
            newState = objectAssign({}, state, {_jobPageDTO: newJobNameState});
            return newState;
    }
            return state;

}
