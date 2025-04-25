export type RawApiResponse = {
    id: number
    name: string
    height: number
    weight: number
    sprites: {
        front_default: string
    }
    stats: Stats[]
    types: Types[]
}

export type FilteredApiResponse= {
    id: number
    name: string
    height: number
    weight: number
    sprite: string
    stats: {
        name: string
        baseStat: number
    }[]
    types: string[]
}

export type Stats = {
    base_stat: number
    stat: {
        name: string
    }
}

export type Types = {
    type: {
        name: string
    }
}