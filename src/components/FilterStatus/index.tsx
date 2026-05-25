"use client"

import "./style.css"

type Props = {
    status: string,
    setStatus: (value: string) => void
}

const FilterStatus = ({ status, setStatus }: Props) => {

    const handleClick = () => {
        if (status === "") setStatus("Alive")
        else if (status === "Alive") setStatus("Dead")
        else if (status === "Dead") setStatus("unknown")
        else setStatus("")
    }

    return (
        <div className="filterStatus">
            <button className="buttonStatus" onClick={handleClick}>
                Estado: {status || "Todos"}
            </button>
        </div>
    )
}

export default FilterStatus