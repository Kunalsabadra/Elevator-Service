import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefination";

export default class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handle = () => {
        console.log("Handler of the job callled");
    };

    failed = (job?: Job) => {
        console.log("Job failed");
        if (job) {
            console.log(job.id);
        }
    };

}