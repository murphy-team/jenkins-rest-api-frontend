import {ActionConstants} from "./ActionConstants";

export interface IShowSnackBarRequestJobSuccessAction {
    type: string;
    showSnackBarRequestSuccess: boolean;
}

export function ShowSnackBarRequestJobSuccessAction(showSnackBarRequestSuccess: boolean): IShowSnackBarRequestJobSuccessAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_JOB_REQUEST_SUCCESS,
        showSnackBarRequestSuccess: showSnackBarRequestSuccess
    };
}
