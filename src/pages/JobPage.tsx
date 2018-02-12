import * as React from "react";
import {JobPageDTO} from '../domain/pages/JobPageDTO';
import {TransitionGroup} from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import {ButtonComponent} from '../components/CommonComponents/ButtonComponent';
import {InputText} from '../components/CommonComponents/InputTex';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HeaderComponent} from "../components/HeaderComponent";
import {RowLabelWithDialogButtonComponent} from "../components/CommonComponents/IRowLabelWithDialogButtonComponent";
import {RowInputTextComponent} from "../components/CommonComponents/RowInputTextComponent";
import {RowComponent} from "../components/RowComponent";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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

    state = {
        openWhichURL: false,
        openWhichJobName: false
    };

    handleOpenURL = () => {
        this.setState({openWhichURL: true});
    };

    handleOpenJobName = () => {
        this.setState({openWhichJobName: true});
    };

    handleCloseURL = () => {
        this.setState({open: false});
    };

    handleCloseJobName = () => {
        this.setState({open: false});
    };

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

                            <RowComponent faqDialogTittle={"About the Git url"}
                                          faqDialogText={"This is the Git url repository used to build the job inside Jenkins. " +
                                          "This repository should contain a Jenkinsfile in order to conduct the build."}
                                          spanlabelText={"URL (git SCM)"} buttonText={"Which URL?"}
                                          inputTextBoxLabelText={"URL"} inputTextBoxHintText={"git@example:...git"}/>

                            <RowComponent faqDialogTittle={"About the job name"}
                                          faqDialogText={"This is the job or alias used by Jenkins in order to identify this job. It's also usefull in other " +
                                          "project related structures such as the compile buidls"}
                                          spanlabelText={"Job name"} buttonText={"Job name?"}
                                          inputTextBoxLabelText={"Job name"}
                                          inputTextBoxHintText={"project-parent..."}/>

                            <div className="row row-separation">
                                <div className="col-md-offset-3 col-md-2">
                                    <ButtonComponent onButtonPressed={() => console.log("soy el boton 1")}
                                                     label={"Create job"} value={"buttonAccept"}
                                                     primary={true}/>
                                </div>

                                <div className="col-md-offset-2 col-md-2">
                                    <ButtonComponent onButtonPressed={() => console.log("soy el boton 1")}
                                                     label={"Clear fields"} value={"buttonClear"}
                                                     primary={false}
                                                     secondary={true}/>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}