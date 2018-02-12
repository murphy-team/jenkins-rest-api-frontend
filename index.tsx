import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {App} from "./src/components/App";

class Index {
    public constructor() {
        const Start = () => (
            <div>
                <App/>
            </div>
        );

        injectTapEventPlugin();
        ReactDOM.render((
            <Start/>
           ),
            document.getElementById('root')
        );
    }
}

new Index();