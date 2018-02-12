import * as React from "react";
import { JobPageDTO } from '../domain/pages/JobPageDTO';
import { TransitionGroup } from "react-transition-group";
import * as CSSTransition from "react-transition-group/CSSTransition";
import { ButtonComponent } from '../components/CommonComponents/ButtonComponent';
import { InputText } from '../components/CommonComponents/InputTex';

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
                        <div>
                            <h1>Hola</h1>
                            <ButtonComponent
                                onButtonPressed={() => { console.log("holaaa") }}
                                label={"Add"} value={""}
                                primary={true} />
                            <InputText onChangeText={(event: object, newValue: string) => { console.log(newValue) }} />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}