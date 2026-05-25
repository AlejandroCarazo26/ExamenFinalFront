"use client"

import { Character } from "@/app/types";
import { useRouter } from "next/navigation";
import "./style.css"

const CharacterChulo = ({ character }: { character: Character }) => {
    const router = useRouter()

    if (!character) return null

    return (
        <div className="ContainerCharacterChulo" onClick={() => router.push(`/character/${character.id}`)}>
            <img src={character?.image}/>
            <div className="InfoContainer">
                <h1>{character.name}</h1>
                <p>{character.status}</p>
                <p>{character.gender}</p>
            </div>
        </div>
    )
}
export default CharacterChulo