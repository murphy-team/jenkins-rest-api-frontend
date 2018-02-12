import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {
    INavigationBarComponentDispatch, INavigationBarComponentProps,
    NavigationBarComponent
} from "./NavigationBarComponent";
import { withRouter } from 'react-router-dom';
import {ChangeRouteActionThunk} from "../../actions/ChangeRouteActionThunk";


const mapStateToProps = (state: IReducers): INavigationBarComponentProps => ({
    currentRoute: state['reducers'].NavigationBarComponentReducer._selectedItem
});

const mapDispatchToProps = (dispatch): INavigationBarComponentDispatch => ({
    onChangeRoute: (route) => dispatch(ChangeRouteActionThunk(route))
});

export const NavigationBarContainer = (connect<INavigationBarComponentProps,INavigationBarComponentDispatch >(
    mapStateToProps,
    mapDispatchToProps
)((NavigationBarComponent)));