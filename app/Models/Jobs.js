import {generateId} from "../Utils/GenerateId.js"

export default class Jobs{
    constructor({name, wage, description}){
        this.name = name 
        this.wage = wage 
        this.description = description || "No description available"
        this.id = generateId()
    }
    get Template() {
        return `<div class="col-4">
        <div class="card">
        <img class="card-img-top img-fluid" src="${this.name}" alt="">
        <div class="card-body" "housesFilter">
            <h4 class="card-title">${this.wage}</h4>
            <p class="card-text">${this.description} ${this.description}</p>
            <form onsubmit="app.jobsController.bid('${this.id}')">
            <div class="form-group p-1">
            <button class="btn btn-success" type="submit" >Bid</button>
            </form>
            <button class="btn btn-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
    
        </div>
        </div>
    </div>`
      }
}