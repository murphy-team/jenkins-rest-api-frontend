import {ActionConstants} from "./ActionConstants";

export interface ICleanTextBoxsAction {
    type: string;
}

export function CleanTextBoxsAction(): ICleanTextBoxsAction {
    return {
        type: ActionConstants.CLEAN_TEXT_BOXS,
    };
}