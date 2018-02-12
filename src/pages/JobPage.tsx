import * as React from "react";
import { JobPageDTO } from '../domain/pages/JobPageDTO';
import { TransitionGroup } from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import { ButtonComponent } from '../components/CommonComponents/ButtonComponent';
import { InputText } from '../components/CommonComponents/InputTex';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                        timeout={{ enter: 5000, exit: 5000 }}
                    >
                        <div className="paper-margins">
                            <MuiThemeProvider>
                                <Paper zDepth={2}>
                                    
                                    <span className="application-title">Jenkins job creator</span>
                                    <ButtonComponent
                                        onButtonPressed={() => { console.log("holaaa") }}
                                        label={"Add"} value={""}
                                        primary={true} />
                                    <InputText onChangeText={(event: object, newValue: string) => { console.log(newValue) }} />
                                </Paper>
                            </MuiThemeProvider>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}