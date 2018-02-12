import * as React from "react";
import {ToDoTableComponent} from "../components/ToDoTableComponent";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";

export interface IPropsTestPage {
}

export interface IDispatchPropsTestPage {
}

export interface IStateTestPage {

}

export class TestPage extends React.Component<IPropsTestPage & IDispatchPropsTestPage, IStateTestPage> {
    public constructor(props: IPropsTestPage & IDispatchPropsTestPage) {
        super(props);
    }

    public render() {
        return(
            <div>
                <h1>Soy el componente index</h1>
            </div>
        );
    }
}