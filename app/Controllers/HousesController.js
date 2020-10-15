import { ProxyState } from "../AppState.js"
import {housesService} from "../Services/HousesService.js"
import House from "../Models/House.js"
import { jobsService } from "../Services/JobsService.js"

function _draw(){
    let house = ProxyState.house
    let template = ""
    house.forEach(h=> template += h.Template)
    document.getElementById("houses").innerHTML = template

}

export default class HousesController{
    constructor(){
        console.log("houses controller")
        console.log
        _draw()
        ProxyState.on("house", _draw)
    }
    createHouse(){
        event.preventDefault();
        let form = event.target

        let rawHouse = {
            img: form.img.value,
            price: form.price.value,
            address: form.address.value,
            year: form.year.value,
            description: form.description.value
        }

        housesService.createHouse(rawHouse)
    }
    removeHouse(id){
        housesService.removeHouse(id)
    }
    bidHouse(id){
        event.preventDefault();
        let form = event.target
        let bid = form.bid.value
        jobsService.bid(id, bid)
    }
}

