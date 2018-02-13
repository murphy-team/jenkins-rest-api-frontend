import * as React from "react";
import {JobPageDTO} from '../../domain/pages/JobPageDTO';
import {TransitionGroup} from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import {ButtonComponent} from '../../components/CommonComponents/ButtonComponent';
import {HeaderComponent} from "../../components/HeaderComponent";
import {RowComponent} from "../../components/RowComponent";
import Spinner from 'react-spinner-children';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import {store} from "../../components/App";
import {ShowSnackBarRequestJobSuccessAction} from "../../actions/ShowSnackBarRequestJobSuccessAction";
import {ShowSnackBarRequestJobFailedAction} from "../../actions/ShowSnackBarRequestJobFailedAction";
import {SpinnerSendJobChangeAction} from "../../actions/SpinnerSendJobChangeAction";

export interface IPropsJobPage {
    jobPage: JobPageDTO;
}

export interface IDispatchPropsJobPage {
    onGitUrlTexBox: (gitUrl) => any;
    onJobNameTexBox: (jobName) => any;
    onClickCleanTextBoxs: () => any;
    onClickCreateJob: (gitUrl, jobName) => any;
}

export interface IStateJobPage {
}


export class JobPage extends React.Component<IPropsJobPage & IDispatchPropsJobPage, IStateJobPage> {
    public constructor(props: IPropsJobPage & IDispatchPropsJobPage) {
        super(props);
    }

    private onChangeTextGitUrl(value: any) {
        this.props.onGitUrlTexBox(value);
    }

    private onChangeTextJobName(value: any) {
        this.props.onJobNameTexBox(value)
    }

    private onClickCreateJob() {
        this.props.onClickCreateJob(this.props.jobPage._jobDTO._url, this.props.jobPage._jobDTO._jobName);
        store.dispatch(SpinnerSendJobChangeAction(false));
    }

    private manageSnackBarRequestJobSuccess() {
        store.dispatch(ShowSnackBarRequestJobSuccessAction(false));
    }

    private manageSnackBarRequestJobFail() {
        store.dispatch(ShowSnackBarRequestJobFailedAction(false));
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

                            <RowComponent valueToText={this.props.jobPage._jobDTO._url}
                                          onChangeText={this.onChangeTextGitUrl.bind(this)}
                                          faqDialogTittle={"About the Git url"}
                                          faqDialogText={"This is the Git url repository used to build the job inside Jenkins. " +
                                          "This repository should contain a Jenkinsfile in order to conduct the build."}
                                          spanlabelText={"URL (git SCM)"} buttonText={"Which URL?"}
                                          inputTextBoxLabelText={"URL"} inputTextBoxHintText={"git@example:...git"}/>

                            <RowComponent valueToText={this.props.jobPage._jobDTO._jobName}
                                          onChangeText={this.onChangeTextJobName.bind(this)}
                                          faqDialogTittle={"About the job name"}
                                          faqDialogText={"This is the job or alias used by Jenkins in order to identify this job. It's also usefull in other " +
                                          "project related structures such as the compile buidls"}
                                          spanlabelText={"Job name"} buttonText={"Job name?"}
                                          inputTextBoxLabelText={"Job name"}
                                          inputTextBoxHintText={"project-parent..."}/>

                            <div className="row row-separation">

                                <Spinner loaded={this.props.jobPage._spinnerLoadedSendJob}>
                                    <div className="col-md-offset-3 col-md-2">

                                        <ButtonComponent onButtonPressed={this.onClickCreateJob.bind(this)}
                                                         label={"Create job"} value={"buttonAccept"}
                                                         primary={true}/>
                                    </div>
                                </Spinner>

                                <div className="col-md-offset-2 col-md-2">
                                    <ButtonComponent onButtonPressed={this.props.onClickCleanTextBoxs}
                                                     label={"Clear fields"} value={"buttonClear"}
                                                     primary={false}
                                                     secondary={true}/>
                                </div>
                            </div>

                            <MuiThemeProvider>
                                <div>
                                    <Snackbar
                                        open={this.props.jobPage._showSnackBarRequestJobSuccess}
                                        message={"Job uploaded to Jenkins correctly"}
                                        autoHideDuration={4000}
                                        onRequestClose={this.manageSnackBarRequestJobSuccess.bind(this)}
                                    />
                                    <Snackbar
                                        open={this.props.jobPage._showSnackBarRequestJobFailed}
                                        message={"There was an error during the job sending request"}
                                        autoHideDuration={4000}
                                        onRequestClose={this.manageSnackBarRequestJobFail.bind(this)}
                                    />
                                </div>
                            </MuiThemeProvider>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}