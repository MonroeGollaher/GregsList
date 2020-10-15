import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"

class HousesService{
    constructor(){
        console.log("hello from house service")
    }
    createHouse(rawHouse){
        let temp = ProxyState.house
        temp.push(new House(rawHouse))
        ProxyState.house = temp
    }
    removeHouse(id){
        let temp = ProxyState.house
        let houseIndex = temp.findIndex(h=> h.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.house = temp
    }
    houseBid(id, bidAmount){
        let temp = ProxyState.house
        if(bidAmount > 0){
            let house = temp.find(c=> c.id == id)
            house.price += parseInt(bidAmount)
            ProxyState.house = temp
        }
    }
}

export const housesService = new HousesService()