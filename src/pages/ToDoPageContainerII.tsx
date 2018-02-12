import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import {IDispatchPropsToDoPageII, IPropsToDoPageII, ToDoPageII} from "./ToDoPageII";

const mapStateToProps = (state: IReducers): IPropsToDoPageII => ({
    toDoPageII: state['reducers'].ToDoPageReducerII._toDoPageII,
});

const mapDispatchToProps = (dispatch): IDispatchPropsToDoPageII => ({
});

export const ToDoPageContainerII = connect<IPropsToDoPageII,IDispatchPropsToDoPageII, {} >(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(ToDoPageII));