import * as React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Constants } from "../../common/Constants";

export interface IInputTextProps {
    onChangeText: (newValue: string) => any;
    hintText?: string;
    floatingLabelText: string;
    valueToText: string;
    passwordField?: string;
    errorText?: string;
}

export interface IState {

}

export class InputText extends React.Component<IInputTextProps, IState> {
    public constructor(props: IInputTextProps) {
        super(props);
    }

    private onChangeText(event:any, text:string) {
        this.props.onChangeText(text);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                        id="text-field-controlled"
                        type={this.props.passwordField}
                        hintText={this.props.hintText}
                        floatingLabelText={this.props.floatingLabelText}
                        onChange={this.onChangeText.bind(this)}
                        value={this.props.valueToText}
                        errorText={this.props.errorText}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}