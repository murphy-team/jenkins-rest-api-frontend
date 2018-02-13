import {ActionConstants} from "./ActionConstants";

export interface IShowSnackBarRequestJobFailedAction {
    type: string;
    showSnackBarRequestFailed: boolean;
}

export function ShowSnackBarRequestJobFailedAction(showSnackBarRequestFailed: boolean): IShowSnackBarRequestJobFailedAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_JOB_REQUEST_FAILED,
        showSnackBarRequestFailed: showSnackBarRequestFailed
    };
}
