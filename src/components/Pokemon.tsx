import { FilteredApiResponse } from '../types/types.ts'
import StatContainer from './StatContainer.tsx'
import TypeContainer from './TypeContainer.tsx'

interface PokemonProps {
    pokemonData: FilteredApiResponse
}

const Pokemon = ({pokemonData}: PokemonProps) => {
    const { id,
            name,
            height,
            weight,
            sprite,
            stats,
            types} = pokemonData

    const statElements = stats.map(({name, baseStat}, index) => (
        <StatContainer key={index} name={name} stat={baseStat} />
    ))

    const typeElements = types.map((type, index) => (
        <TypeContainer key={index} name={type} />
    ))

    return (
        <section className="w-full flex flex-col sm:flex-row items-center justify-center bg-white rounded-xl my-4 sm:pt-4 font-inter">
            <img src={sprite}
                 alt={`image of ${name}`}
                 className="w-full sm:w-1/2 aspect-square"
            />
            <div className="sm:w-1/2">
                <div className="px-4">
                    <h1 className="font-bold text-2xl">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <p>NO. {id}</p>
                </div>
                <div className="flex gap-2 px-4 my-2">
                    {typeElements}
                </div>
                <div className="flex flex-wrap w-full justify-between px-4 pb-6 mt-2 gap-x-1 gap-y-2">
                    <StatContainer name={"height"} stat={height}/>
                    <StatContainer name={"weight"} stat={weight}/>
                    {statElements}
                </div>
            </div>
        </section>
    )
}

export default Pokemon