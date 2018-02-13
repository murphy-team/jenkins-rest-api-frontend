import axios from 'axios';
import {Constants} from "../common/Constants";

export class JobSenderBS {

    public constructor() {

    }
    public postJobRequest(gitUrl, jobName) {
        return axios({
            data: {
                "url": gitUrl,
                "jobName": jobName
            },
            method: 'post',
            url: "http://" + Constants.IP_ADDRESS + ":8136/jenkins/api/job",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return (response);
        });
    }
}