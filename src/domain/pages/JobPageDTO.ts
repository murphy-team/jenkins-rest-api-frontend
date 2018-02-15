import { JobDTO } from '../JobDTO';

export class JobPageDTO {

    _jobDTO: JobDTO;
    _spinnerLoadedSendJob: boolean;
    _showSnackBarRequestJobFailed: boolean;
    _showSnackBarRequestJobSuccess: boolean;
    _errorText: string;
    _showSnackBarInvalidURL: boolean;

    public constructor() {
        this._jobDTO = null;
        this._spinnerLoadedSendJob = null;
        this._showSnackBarRequestJobFailed = null;
        this._showSnackBarRequestJobSuccess = null;
        this._errorText = null;
        this._showSnackBarInvalidURL = null;
    }

}