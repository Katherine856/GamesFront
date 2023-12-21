import { Deals } from "./Deals"

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