import {ActionConstants} from "./ActionConstants";

export interface ITestRegexExpressionAction {
    type: string;
}

export function TestRegexExpressionAction(): ITestRegexExpressionAction {
    return {
        type: ActionConstants.TEST_REGEX_EXPRESSION,
    };
}