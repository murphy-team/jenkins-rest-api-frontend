import * as React from "react";
import {JobPageDTO} from '../domain/pages/JobPageDTO';
import {TransitionGroup} from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import {ButtonComponent} from '../components/CommonComponents/ButtonComponent';
import {InputText} from '../components/CommonComponents/InputTex';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HeaderComponent} from "../components/HeaderComponent";
import {RowLabelComponent} from "../components/CommonComponents/RowComponent";

const jenkinsImage = require("../../assets/jenkins.png");

let imageStyle = {
    height: "150px",
    width: "auto"
};

export interface IPropsJobPage {
    jobPage?: JobPageDTO;
}

export interface IDispatchPropsJobPage {
}

export interface IStateJobPage {

}

export class JobPage extends React.Component<IPropsJobPage & IDispatchPropsJobPage, IStateJobPage> {
    public constructor(props: IPropsJobPage & IDispatchPropsJobPage) {
        super(props);
    }

    public render() {
        return (
            <div>
                <TransitionGroup>
                    <CSSTransition
                        classNames="animation-job-page"
                        appear={true}
                        timeout={{enter: 5000, exit: 5000}}
                    >
                        <div>
                            <div className="paper-margins">
                                <HeaderComponent/>
                            </div>

                            <div className="well col-md-6 row-separation">
                                <RowLabelComponent buttonText={"What's this?"} labelText={"URL (git SCM)"}/>
                            </div>
                        </div>

                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}