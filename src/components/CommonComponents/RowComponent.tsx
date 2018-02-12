import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ButtonComponent} from "./ButtonComponent";

export interface IRowLabelomponentProps {
    onButtonPressed?: (value) => any;
    labelText: string;
    buttonText: string;
}

export interface IRowLabelComponentState {

}

export class RowLabelComponent extends React.Component<IRowLabelomponentProps, IRowLabelComponentState> {
    public constructor(props: IRowLabelomponentProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="row-text">
                        <span>{this.props.labelText}</span>
                    </div>
                </div>
                <div className="row row-button">
                    <div className="col-md-offset-3 col-md-6">
                        <ButtonComponent onButtonPressed={this.props.onButtonPressed} label={this.props.buttonText} value={this.props.buttonText} primary={true}/>
                    </div>
                </div>
            </div>
        );
    }
}