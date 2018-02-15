import {RegularExpressionBS} from "../bs/RegularExpressionBS";
import {SpinnerSendJobChangeAction} from "./SpinnerSendJobChangeAction";
import {RequestJobAction} from "./RequestJobAction";
import {ChangeTextErrorTextField} from "./ChangeTextErrorTextField";
import {store} from "../components/App";

export function TestRegexExpressionAction(gitUrl, jobName) {

    let regularExpressionBS = new RegularExpressionBS();
    let valid = regularExpressionBS.testRegularExpresion(gitUrl);

    return function (dispatch) {

        if (valid === true) {
            dispatch(ChangeTextErrorTextField(valid));
            dispatch(RequestJobAction(gitUrl, jobName));
            dispatch(SpinnerSendJobChangeAction(false));

        } else {
            dispatch(ChangeTextErrorTextField(valid))

        }
    }
}