import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import {IDispatchPropsWelcomePage, IPropsWelcomePage, WelcomePage} from "./WelcomePage";

const mapStateToProps = (state: IReducers): IPropsWelcomePage => ({
    welcomePage: state['reducers'].WelcomePageReducer._welcomePage,
});

const mapDispatchToProps = (dispatch): IDispatchPropsWelcomePage => ({
});

export const WelcomePageContainer = connect<IPropsWelcomePage,IDispatchPropsWelcomePage, {} >(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(WelcomePage));