import { JobDTO } from '../JobDTO';

export class JobPageDTO {

    _jobDTO: JobDTO;
    _spinnerLoadedSendJob: boolean;
    _showSnackBarRequestJobFailed: boolean;
    _showSnackBarRequestJobSuccess: boolean;
    _testRegexExpressionOfGitUrl: boolean;

    public constructor() {
        this._jobDTO = null;
        this._spinnerLoadedSendJob = null;
        this._showSnackBarRequestJobFailed = null;
        this._showSnackBarRequestJobSuccess = null;
        this._testRegexExpressionOfGitUrl = null;
    }

}