import { Deals } from "./Deals"

//Interface que nos permite modelar un juego con toda su información 
export interface GameInfo{
    info: {
        title: string,
        steamAppID: number,
        thumb: string
      },
      cheapestPriceEver: {
        price: number,
        date: Date
      },
      deals: Deals[]
}