import { ProxyState } from "../AppState.js"
import {jobsService} from "../Services/JobsService.js"

function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(j=> template += j.Template)
    document.getElementById("jobs").innerHTML = template
}

export default class JobsController{
    constructor(){
        console.log("jobs controller")
        console.log
        _draw()
        ProxyState.on("jobs", _draw)
    }
    addJob(){
        event.preventDefault();
        let form = event.target

        let rawJob = {
            name: form.name.value,
            wage: form.wage.value,
            description: form.description.value,
        }

        jobsService.createJob(rawJob)
    }
    removeJob(id){
        jobsService.removeJob(id)
    }

}