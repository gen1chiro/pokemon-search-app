import React, { useState, useRef } from 'react'
import { RawApiResponse, FilteredApiResponse, Stats, Types} from "../types/types.ts";

function App() {
    const [pokemonData, setPokemonData] = useState<FilteredApiResponse | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const filterRelevantData = (data: RawApiResponse): FilteredApiResponse => {
        return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprite: data.sprites.front_default,
            stats: data.stats.map((stat: Stats):{name: string, baseStat: number} => ({
                name: stat.stat.name,
                baseStat: stat.base_stat,
            })),
            types: data.types.map((type: Types) => type.type.name),
        }
    }

    const fetchData = async (input: string): Promise<void> => {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`)
        const data: RawApiResponse = await res.json()
        setPokemonData(filterRelevantData(data))
    }

    const getRefValue = (ref) => {
        return ref.current?.value
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            fetchData(getRefValue(inputRef)).then()
        }
    }

    const handleClick = () => {
        fetchData(getRefValue(inputRef)).then()
    }

    return (
        <main>
            <input ref={inputRef} type="text" onKeyDown={handleKeyDown}/>
            <button onClick={handleClick}>Search</button>
            <div>
                {pokemonData ? JSON.stringify(pokemonData) : "none"}
            </div>
        </main>
    )
}

export default App
