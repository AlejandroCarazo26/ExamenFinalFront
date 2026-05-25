"use client"

import "./style.css"

type Props = {
    gender: string,
    setGender: React.Dispatch<React.SetStateAction<string>>
}

const FilterGender = ({ gender, setGender }: Props) => {

    const handleClick = () => {
        if (gender === "") setGender("Female")
        else if (gender === "Female") setGender("Male")
        else if (gender === "Male") setGender("Genderless")
        else if (gender === "Genderless") setGender("unknown")
        else setGender("")
    }

    return (
        <div className="filterGender">
            <button className="buttonGender" onClick={handleClick}>
                Género: {gender || "Todos"}
            </button>
        </div>
    )
}

export default FilterGender