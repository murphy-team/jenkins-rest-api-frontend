import * as React from "react";
import {HeaderComponent} from "./HeaderComponent";
import {RowLabelWithDialogButtonComponent} from "./CommonComponents/IRowLabelWithDialogButtonComponent";
import {RowInputTextComponent} from "./CommonComponents/RowInputTextComponent";

export interface IPropsRowComponent {
    spanlabelText: string;
    buttonText: string;
    inputTextBoxLabelText: string;
    inputTextBoxHintText: string;
    faqDialogTittle: string;
    faqDialogText: string;

}

export interface IDispatchPropsRowComponent {
}

export interface IStateRowComponent {

}

export class RowComponent extends React.Component<IPropsRowComponent & IDispatchPropsRowComponent, IStateRowComponent> {
    public constructor(props: IPropsRowComponent & IDispatchPropsRowComponent) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="row row-separation">
                    <div className="well col-md-6">
                        <RowLabelWithDialogButtonComponent faqDialogTittle={this.props.faqDialogTittle}
                                                           faqDialogText={this.props.faqDialogText}
                                                           buttonText={this.props.buttonText}
                                                           labelText={this.props.spanlabelText}/>
                    </div>
                    <div className="well col-md-6">
                        <div>
                            <RowInputTextComponent labelText={this.props.inputTextBoxLabelText}
                                                   hintText={this.props.inputTextBoxHintText}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}