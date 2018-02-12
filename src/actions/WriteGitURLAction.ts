import {ActionConstants} from "./ActionConstants";

export interface IWriteGitURLAction {
    type: string;
    gitUrl: string
}

export function WriteGitURLAction(gitUrl: string): IWriteGitURLAction {
    return {
        type: ActionConstants.WRITE_GIT_URL,
        gitUrl: gitUrl
    };
}