"use client"

type Props = {
    status: string,
    setStatus: React.Dispatch<React.SetStateAction<string>>
}

const statuses = ["", "Alive", "Dead", "unknown"]

const FilterStatus = ({ status, setStatus }: Props) => {

    const handleClick = () => {
        const currentIndex = statuses.indexOf(status)
        const nextIndex = (currentIndex + 1) % statuses.length
        setStatus(statuses[nextIndex])
    }

    return (
        <div className="filterStatus">
            <button onClick={handleClick}>
                Estado: {status || "Todos"}
            </button>
        </div>
        
    )
}

export default FilterStatus;