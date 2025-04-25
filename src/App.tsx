import React, { useState, useRef } from 'react'
import { RawApiResponse, FilteredApiResponse, Stats, Types} from './types/types.ts'
import Default from './components/Default.tsx'

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
        try {
            const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`)
            const data: RawApiResponse = await res.json()
            setPokemonData(filterRelevantData(data))
        } catch (err) {
            console.error(err)
        }
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
        <main className="w-5/6 mx-auto mt-8 max-w-xl pt-8 pb-2 font-sans bg-gray-100 rounded-3xl shadow-lg">
            <section className="max-w-sm mx-auto flex items-center gap-2 border-1 p-1 bg-white shadow-lg border-white rounded-full">
                <input ref={inputRef} type="text" onKeyDown={handleKeyDown}
                    className="flex-grow focus:outline-none px-3"
                />
                <button onClick={handleClick}
                    className="bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg rounded-full aspect-square p-2 hover:scale-105 transition-all ease-in"
                >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                            stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </section>
            {pokemonData ? JSON.stringify(pokemonData) : <Default/>}
        </main>
    )
}

export default App
