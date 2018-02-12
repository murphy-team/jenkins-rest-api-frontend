import {Action} from "redux";
import {WelcomePageDTO} from "../domain/pages/WelcomePageDTO";

export class WelcomePageState {
    _welcomePage: WelcomePageDTO;

    public constructor() {
        this._welcomePage = new WelcomePageDTO();
        this._welcomePage._title = "JAKJDSAJIF";
    }
}

export function WelcomePageReducer(state: WelcomePageState = new WelcomePageState(), action: Action): WelcomePageState {
    let newState: WelcomePageState;

    switch (action.type) {

        default:
            return state;
    }
}