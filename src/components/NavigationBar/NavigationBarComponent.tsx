import * as React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import SearchDatabase from 'material-ui/svg-icons/action/youtube-searched-for'
import {Link, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";


const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const DownloadFilesToLocal = <DownloadFiles/>;
const AppSettings = <Settings/>;
const SearchFromDatabase = <SearchDatabase/>;

export interface INavigationBarComponentProps {
    currentRoute: number
}

export interface INavigationBarComponentState {
}

export interface INavigationBarComponentDispatch {
    onChangeRoute: (route) => any;
}

export class NavigationBarComponent extends React.Component<INavigationBarComponentProps & INavigationBarComponentDispatch , INavigationBarComponentState> {
    public constructor(props: INavigationBarComponentProps  & INavigationBarComponentDispatch) {
        super(props);
    }

    private onTouchListener(routeIndex) {
        this.props.onChangeRoute(routeIndex);
    }

    public render() {

        return (
            <div>
                <MuiThemeProvider>
                    <Paper zDepth={2}>
                        <BottomNavigation selectedIndex={this.props.currentRoute}>
                            <BottomNavigationItem
                                label={"Index"}
                                icon={SearchDnaSequences}
                                onTouchTap={() => this.onTouchListener(0)}
                            />

                            <BottomNavigationItem
                                label={"Link 1"}
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.onTouchListener(1)}
                            />

                            <BottomNavigationItem
                                label={"Link 2"}
                                icon={DownloadFilesToLocal}
                                onTouchTap={() => this.onTouchListener(2)}
                            />
                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>

        );
    }
}
