import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class NavigationBarComponentState {
    _selectedItem: number;
    _historyObject: any;

    public constructor() {
        this._selectedItem = 0;
        this._historyObject = null;
    }
}

export function NavigationBarComponentReducer(state: NavigationBarComponentState = new NavigationBarComponentState(), action: Action): NavigationBarComponentState {
    let newState: NavigationBarComponentState;

    switch (action.type) {
        case ActionConstants.CHANGE_ROUTE:
            let newNavigationRouteState = objectAssign({}, state._selectedItem, {});
            newNavigationRouteState = action["route"];
            newState = objectAssign({}, state, {_selectedItem: newNavigationRouteState});
            return newState;
    }
            return state;

}
