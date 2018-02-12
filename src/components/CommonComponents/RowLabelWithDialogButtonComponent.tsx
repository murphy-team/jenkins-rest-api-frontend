import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {ButtonComponent} from "./ButtonComponent";

export interface IRowLabelWithDialogButtonComponentProps {
    onButtonPressed?: (value) => any;
    labelText: string;
    buttonText: string;
    faqDialogText: string;
    faqDialogTitle: string;
}

export interface IRowLabelWithDialogButtonComponentState {

}

export class RowLabelWithDialogButtonComponent extends React.Component<IRowLabelWithDialogButtonComponentProps, IRowLabelWithDialogButtonComponentState> {
    public constructor(props: IRowLabelWithDialogButtonComponentProps) {
        super(props);
    }

    state = {
        open: false,
    };

    private handleClose = () => {
        this.setState({open: false});
    };

    private changeButtonState(event) {
        this.setState({open: true});
    }

    public render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <div className="row">
                    <div className="row-text">
                        <span>{this.props.labelText}</span>
                    </div>
                </div>
                <div className="row row-button">
                    <div className="col-md-offset-3 col-md-6">
                        <ButtonComponent onButtonPressed={this.changeButtonState.bind(this)}
                                         label={this.props.buttonText}
                                         value={this.props.buttonText} primary={true}/>
                        <MuiThemeProvider>
                            <Dialog
                                title={this.props.faqDialogTitle}
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                            >
                                {this.props.faqDialogText}
                            </Dialog>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}