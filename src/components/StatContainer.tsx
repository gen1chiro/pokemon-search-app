interface StatContainerProps {
    name: string
    stat: number
}

const StatContainer = ({name, stat}: StatContainerProps) => {
    return (
        <div className="w-[49%]">
            <p className="text-sm font-light text-gray-600">{name}</p>
            <div className="bg-gray-100 rounded-full px-2 py-1 shadow-lg text-center text-gray-800">{stat}</div>
        </div>
    )
}

export default StatContainer