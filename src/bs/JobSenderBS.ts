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
            url: "http://localhost:1313/job",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return (response);
        });
    }
}