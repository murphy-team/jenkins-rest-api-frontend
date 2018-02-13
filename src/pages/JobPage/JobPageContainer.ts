import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {IDispatchPropsJobPage, IPropsJobPage, JobPage} from "./JobPage";
import {WriteGitURLAction} from "../../actions/WriteGitURLAction";
import {WriteJobNameAction} from "../../actions/WriteJobNameAction";
import {CleanTextBoxsAction} from "../../actions/CleanTextBoxsAction";
import {RequestJobAction} from "../../actions/RequestJobAction";


const mapStateToProps = (state: IReducers): IPropsJobPage => ({
    jobPage: state['reducers'].JobPageReducer._jobPageDTO
});

const mapDispatchToProps = (dispatch): IDispatchPropsJobPage => ({
    onGitUrlTexBox: (gitUrl) => dispatch(WriteGitURLAction(gitUrl)),
    onJobNameTexBox: (jobName) => dispatch(WriteJobNameAction(jobName)),
    onClickCleanTextBoxs: () => dispatch(CleanTextBoxsAction()),
    onClickCreateJob: (gitUrl, jobName) => dispatch(RequestJobAction(gitUrl, jobName)),
});

export const JobPageContainer = (connect<IPropsJobPage, IDispatchPropsJobPage>(
    mapStateToProps,
    mapDispatchToProps
)((JobPage)));