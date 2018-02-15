import {ActionConstants} from "./ActionConstants";

export interface IChangeTextErrorTextField {
    type: string;
    valid: boolean;
}

export function ChangeTextErrorTextField(valid: boolean): IChangeTextErrorTextField {
    return {
        type: ActionConstants.CHANGE_TEXT_ERROR_TEXT_FIELD,
        valid: valid
    };
}