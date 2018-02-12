import {ActionConstants} from "./ActionConstants";

export interface IChangeRouteAction {
    type: string;
    route: string
}

export function ChangeRouteAction(route: string): IChangeRouteAction {
    return {
        type: ActionConstants.CHANGE_ROUTE,
        route: route
    };
}