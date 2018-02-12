import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {ToDoTableComponent} from "../components/ToDoTableComponent";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";

export interface IPropsToDoPageII {
    intl?: any;
    toDoPageII: ToDoPageDTO;
}

export interface IDispatchPropsToDoPageII {
}

export interface IStateToDoPageII {

}

export class ToDoPageII extends React.Component<IPropsToDoPageII & IDispatchPropsToDoPageII & InjectedIntlProps, IStateToDoPageII> {
    public constructor(props: IPropsToDoPageII & IDispatchPropsToDoPageII & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return(
            <div>
                <h2>Soy el componente chulo 2</h2>
            </div>
        );
    }
}