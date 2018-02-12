import * as React from "react";
import {InputText} from "./InputTex";

export interface IRowInputTextComponentProps {
    valueToText: string;
    onChangeText: (value) => any;
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
                           onChangeText={this.props.onChangeText} valueToText={this.props.valueToText}/>
            </div>
        );
    }
}