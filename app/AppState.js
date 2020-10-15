import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Jobs from "./Models/Jobs.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({make:"Honda", model: "Accord", year: 2002, price: 5000, img: "//placehold.it/200x200", description:"This is a red honda."})]
  /** @type {House[]}*/
  house = [new House({img: "//placehold.it/200x200", price:300000, address: "3909 Jeter St", year: 1970, description: "cozy cottage"})]
  /** @type {Jobs[]}*/
  jobs = [new Jobs({name: "construction", wage: "30,000", description: "laborous work"})]
}
// new Car("Jeep", "Rango",1990, 10000, "//placehold.it/200x200", "A nice jeep")

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
