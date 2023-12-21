export interface Game {
    gameID: number,
    steamAppID: number | null,
    cheapest: number,
    cheapestDealID: string
    external: string
    internalName: string
    thumb: string
}