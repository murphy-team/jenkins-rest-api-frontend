import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import { withRouter } from 'react-router-dom'
import {IDispatchPropsToDoPage, IPropsRouterToDoPage, IPropsToDoPage, ToDoPage} from "./ToDoPage";

const mapStateToProps = (state: IReducers): IPropsToDoPage => ({
    toDoPage: state['reducers'].ToDoPageReducer._toDoPage,
});

const mapDispatchToProps = (dispatch): IDispatchPropsToDoPage => ({
});

export const ToDoPageContainer = withRouter(connect<IPropsToDoPage,IDispatchPropsToDoPage, IPropsRouterToDoPage >(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(ToDoPage)));