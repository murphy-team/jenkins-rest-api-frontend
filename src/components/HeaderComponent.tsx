import * as React from "react";
import {JobPageDTO} from '../domain/pages/JobPageDTO';
import {TransitionGroup} from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const jenkinsImage = require("../../assets/jenkins.png");

let imageStyle = {
    height: "150px",
    width: "auto"
};

export interface IPropsHeaderComponent {
}

export interface IStateHeaderComponent {

}

export class HeaderComponent extends React.Component<IPropsHeaderComponent, IStateHeaderComponent> {
    public constructor(props: IPropsHeaderComponent) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Paper zDepth={3}>
                        <div className="row">
                            <div className="col-md-offset-2 col-md-3">
                                <h1 className="application-title">Jenkins job creator panel control</h1>
                            </div>
                            <div className="row photo-header">
                                <div className="col-md-offset-2 col-md-3">
                                    <img src={jenkinsImage} style={imageStyle}/>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}