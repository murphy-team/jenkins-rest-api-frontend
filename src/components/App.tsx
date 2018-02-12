import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import {NavigationBarComponent} from "./NavigationBar/NavigationBarComponent";
import createHistory from 'history/createBrowserHistory'
import {NavigationBarContainer} from "./NavigationBar/NavigationBarContainer";
import { JobPage } from '../pages/JobPage';

export const history = createHistory();

const routerMid = routerMiddleware(history);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
    routing: routerReducer,
});


const middlewares = [ReduxThunk["default"], logger, routerMid];

export const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares))
);


export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <IntlProvider>
                    <div className="container-fluid">
                        <ConnectedRouter history={history}>
                            <div>
                                <JobPage/>
                                {/* <NavigationBarContainer/>
                                <Route exact path="/" component={TestPage}/>
                                <Route path="/test1" component={ToDoPageContainer}/>
                                <Route path="/test2" component={ToDoPageContainerII}/> */}
                            </div>
                        </ConnectedRouter>
                        {this.props.children}
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}