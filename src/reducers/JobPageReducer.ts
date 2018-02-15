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
        this._jobPageDTO._showSnackBarRequestJobSuccess = false;
        this._jobPageDTO._showSnackBarRequestJobFailed = false;
        this._jobPageDTO._spinnerLoadedSendJob = true;
        this._jobPageDTO._errorText = "";
        this._jobPageDTO._showSnackBarInvalidURL = false;
    }
}

export function JobPageReducer(state: JobPageState = new JobPageState(), action: Action): JobPageState {
    let newState: JobPageState;

    switch (action.type) {
        case ActionConstants.WRITE_GIT_URL:
            let newGitUrlState = objectAssign({}, state._jobPageDTO, {});
            let gitUrlFromAction = action["gitUrl"];
            newGitUrlState._jobDTO._url = gitUrlFromAction;
            newState = objectAssign({}, state, {_jobPageDTO: newGitUrlState});
            return newState;

        case ActionConstants.WRITE_JOB_NAME:
            let newJobNameState = objectAssign({}, state._jobPageDTO, {});
            let jobNameFromAction = action["jobName"];
            newJobNameState._jobDTO._jobName = jobNameFromAction;
            newState = objectAssign({}, state, {_jobPageDTO: newJobNameState});
            return newState;

        case ActionConstants.CLEAN_TEXT_BOXS:
            let newStateWithEmptyFields = objectAssign({}, state._jobPageDTO, {});
            newStateWithEmptyFields._jobDTO._url = "";
            newStateWithEmptyFields._jobDTO._jobName= "";
            newState = objectAssign({}, state, {_jobPageDTO: newStateWithEmptyFields});
            return newState;

        case ActionConstants.SPINNER_SEND_JOB_STATE_CHANGE:
            let newPageWithSpinnerState = objectAssign({}, state._jobPageDTO, {});
            newPageWithSpinnerState._spinnerLoadedSendJob = action["spinnerStateLoaded"];
            newState = objectAssign({}, state, {_jobPageDTO: newPageWithSpinnerState});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_JOB_REQUEST_SUCCESS:
            let newPageShowingJobRequestSuccessSnackbar = objectAssign({}, state._jobPageDTO, {});
            newPageShowingJobRequestSuccessSnackbar._showSnackBarRequestJobSuccess = action["showSnackBarRequestSuccess"];
            newState = objectAssign({}, state, {_jobPageDTO: newPageShowingJobRequestSuccessSnackbar});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_JOB_REQUEST_FAILED:
            let newPageShowingJobRequestFailedSnackbar = objectAssign({}, state._jobPageDTO, {});
            newPageShowingJobRequestFailedSnackbar._showSnackBarRequestJobFailed = action["showSnackBarRequestFailed"];
            newState = objectAssign({}, state, {_jobPageDTO: newPageShowingJobRequestFailedSnackbar});
            return newState;

        case ActionConstants.CHANGE_TEXT_ERROR_TEXT_FIELD:
            let newPageChangeErrorTextField = objectAssign({}, state._jobPageDTO, {});
            let valid = action["valid"];

            if (valid === true) {
                newPageChangeErrorTextField._errorText = "";
            } else {
                newPageChangeErrorTextField._errorText = "You must provide a valid URL";
            }
            newState = objectAssign({}, state, {_jobPageDTO: newPageChangeErrorTextField});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_INVALID_URL:
            let newPageShowingInvalidURLSnackBar = objectAssign({}, state._jobPageDTO, {});
            newPageShowingInvalidURLSnackBar._showSnackBarInvalidURL = action["showSnackBarInvalidURL"];
            newState = objectAssign({}, state, {_jobPageDTO: newPageShowingInvalidURLSnackBar});
            return newState;
    }
            return state;

}
