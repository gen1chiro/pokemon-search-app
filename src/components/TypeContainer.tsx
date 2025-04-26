interface TypeContainerProps {
    name: string
}

const typeGradients: Record<string, string> = {
    normal: 'bg-radial from-gray-300 via-gray-400 to-gray-500',
    fire: 'bg-radial from-orange-400 via-red-500 to-yellow-500',
    water: 'bg-radial from-blue-400 via-blue-500 to-cyan-500',
    electric: 'bg-radial from-yellow-300 via-yellow-400 to-yellow-500',
    grass: 'bg-radial from-green-400 via-green-500 to-emerald-500',
    ice: 'bg-radial from-cyan-300 via-blue-300 to-cyan-400',
    fighting: 'bg-radial from-red-600 via-red-700 to-red-800',
    poison: 'bg-radial from-purple-400 via-purple-500 to-purple-600',
    ground: 'bg-radial from-yellow-600 via-yellow-700 to-yellow-800',
    flying: 'bg-radial from-blue-300 via-indigo-300 to-indigo-400',
    psychic: 'bg-radial from-pink-400 via-pink-500 to-pink-600',
    bug: 'bg-radial from-lime-400 via-green-500 to-lime-500',
    rock: 'bg-radial from-yellow-700 via-yellow-800 to-yellow-900',
    ghost: 'bg-radial from-indigo-500 via-indigo-600 to-indigo-700',
    dragon: 'bg-radial from-purple-500 via-indigo-500 to-blue-600',
    dark: 'bg-radial from-gray-700 via-gray-800 to-black',
    steel: 'bg-radial from-gray-400 via-gray-500 to-gray-600',
    fairy: 'bg-radial from-pink-300 via-pink-400 to-pink-500',
}

const TypeContainer = ({name}: TypeContainerProps) => {
    const gradient = typeGradients[name]

    return (
        <div className={`${gradient} rounded-full px-3 font-light`}>{name}</div>
    )
}

export default TypeContainer