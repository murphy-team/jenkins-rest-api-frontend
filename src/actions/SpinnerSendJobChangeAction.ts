import {ActionConstants} from "./ActionConstants";

export interface ISpinnerSendJobChangeAction {
    type: string;
    spinnerStateLoaded: boolean;
}

export function SpinnerSendJobChangeAction(spinnerStateLoaded: boolean): ISpinnerSendJobChangeAction {
    return {
        type: ActionConstants.SPINNER_SEND_JOB_STATE_CHANGE,
        spinnerStateLoaded: spinnerStateLoaded
    };
}