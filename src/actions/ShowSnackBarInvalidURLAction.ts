import {ActionConstants} from "./ActionConstants";

export interface IShowSnackBarInvalidURLAction {
    type: string;
    showSnackBarInvalidURL: boolean;
}

export function ShowSnackBarInvalidURLAction(showSnackBarInvalidURL: boolean): IShowSnackBarInvalidURLAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_INVALID_URL,
        showSnackBarInvalidURL: showSnackBarInvalidURL
    };
}