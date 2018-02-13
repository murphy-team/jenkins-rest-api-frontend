import {JobSenderBS} from "../bs/JobSenderBS";
import {SpinnerSendJobChangeAction} from "./SpinnerSendJobChangeAction";
import {ShowSnackBarRequestJobSuccessAction} from "./ShowSnackBarRequestJobSuccessAction";
import {ShowSnackBarRequestJobFailedAction} from "./ShowSnackBarRequestJobFailedAction";

export function RequestJobAction(gitUrl, jobName) {

    let jobSenderBS = new JobSenderBS();

    return function (dispatch) {
        return jobSenderBS.postJobRequest(gitUrl, jobName)
            .then((response) => {
                console.log("He entrado por EL THEN")
                if (response.status === 200) {
                    dispatch(SpinnerSendJobChangeAction(true));
                    dispatch(ShowSnackBarRequestJobSuccessAction(true));
                }
            }).catch(error => {
                console.log("He entrado por EL CATCH")
                dispatch(SpinnerSendJobChangeAction(true));
                dispatch(ShowSnackBarRequestJobFailedAction(true));
            })
    }
}