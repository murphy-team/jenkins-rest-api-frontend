import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {ToDoTableComponent} from "../components/ToDoTableComponent";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";
import {RouteComponentProps} from "react-router";

export interface IPropsToDoPage {
    intl?: any;
    toDoPage: ToDoPageDTO;
}

export interface IPropsRouterToDoPage extends RouteComponentProps<any>{
    history: any;
}

export interface IDispatchPropsToDoPage {
}

export interface IStateToDoPage {
}

export class ToDoPage extends React.Component<IPropsToDoPage & IPropsRouterToDoPage & IDispatchPropsToDoPage & InjectedIntlProps, IStateToDoPage> {
    public constructor(props: IPropsToDoPage & IDispatchPropsToDoPage & InjectedIntlProps & IPropsRouterToDoPage) {
        super(props);
    }

    componentWillMount() {
        console.log("LA HISTORIA ", this.props.history);
    }

    public render() {
        return (
            <div>
                <ToDoTableComponent columnList={this.props.toDoPage._tableHeaderColumns}
                                    dataList={this.props.toDoPage._toDoItems}/>
            </div>
        );
    }
}