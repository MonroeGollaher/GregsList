import {generateId} from "../Utils/GenerateId.js"

export default class House{
    constructor({img, price, address, year, description}){
        this.img = img
        this.price = price
        this.address = address
        this.year = year
        this.description = description || "No description available"
        this.id = generateId()
    }

    get Template() {
        return `<div class="col-4">
        <div class="card">
        <img class="card-img-top img-fluid" src="${this.img}" alt="">
        <div class="card-body" "housesFilter">
            <h4 class="card-title">${this.price} ${this.address}</h4>
            <p class="card-text">${this.year} ${this.description}</p>
            <form onsubmit="app.houseController.bid('${this.id}')">
            <div class="form-group p-1">
            <input type="number"
            class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
            </div>
            <button class="btn btn-success" type="submit" >Bid</button>
            </form>
            <button class="btn btn-danger" onclick="app.houseController.removeHouse('${this.id}')">Delete</button>
    
        </div>
        </div>
    </div>`
      }
}