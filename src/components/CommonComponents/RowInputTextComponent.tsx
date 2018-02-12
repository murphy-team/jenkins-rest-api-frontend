import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ButtonComponent} from "./ButtonComponent";
import {InputText} from "./InputTex";

export interface IRowInputTextComponentProps {
    onChangeText?: (value) => any;
    labelText: string;
    hintText: string;
}

export interface IRowInputTextComponentState {

}

export class RowInputTextComponent extends React.Component<IRowInputTextComponentProps, IRowInputTextComponentState> {
    public constructor(props: IRowInputTextComponentProps) {
        super(props);
    }

    public render() {
        return (
            <div className="row-inputText">
                <InputText hintText={this.props.hintText} floatingLabelText={this.props.labelText}
                           onChangeText={() => console.log("ikgodkgoe")}/>
            </div>
        );
    }
}