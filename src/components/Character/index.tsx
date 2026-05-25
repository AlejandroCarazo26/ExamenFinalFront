"use client"

import { Character } from "@/app/types";
import "./style.css"

const CharacterChulo = ({character}:{character?: Character}) =>{

    return(
        <div className="ContainerCharacterChulo">
            <img src={character?.image}></img>
            <div className="InfoContainer">
                <h1>{character?.name}</h1>
                <p>{character?.gender}</p>
                <p>{character?.location.name}</p>

            </div>
            
        </div>
    )
}
export default CharacterChulo