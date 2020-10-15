import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js"

class JobsService{
    constructor(){
        console.log("hello from jobs")
    }
    createJob(rawJob){
        let temp = ProxyState.jobs
        temp.push(new Jobs(rawJob))
        ProxyState.jobs = temp
    }
    removeJob(id){
        let temp = ProxyState.jobs
        let jobsIndex = temp.findIndex(j=> j.id == id)
        temp.splice(jobsIndex, 1)
        ProxyState.jobs = temp
    }
}   

export const jobsService = new JobsService()