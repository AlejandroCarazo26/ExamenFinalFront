"use client"

import "./style.css"

type Props = {
    gender: string,
    setGender: React.Dispatch<React.SetStateAction<string>>
}

const genders = ["", "Female", "Male", "Genderless", "unknown"]

const FilterGender = ({ gender, setGender }: Props) => {

    const handleClick = () => {
        const currentIndex = genders.indexOf(gender)
        const nextIndex = (currentIndex + 1) % genders.length
        setGender(genders[nextIndex])
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