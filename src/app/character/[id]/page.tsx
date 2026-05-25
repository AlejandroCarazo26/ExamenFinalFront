"use client"

import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Character } from "@/app/types"
import { api } from "@/api/api"
import "./page.css"

const PageCharacterDetail = () => {
    const { id } = useParams()
    const router = useRouter()
    const [character, setCharacter] = useState<Character | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        api.get(`/character/${id}`)
            .then((res) => {
                setCharacter(res.data)
            })
            .catch((e) => {
                setError(`Error cargando el personaje: ${e.message}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            {loading && <h1>Cargando...</h1>}
            {error && <h2>{error}</h2>}

            {character && (
                <div className="characterCard">
                    <button className="buttonVolver" onClick={() => router.back()}>Volver</button>
                    <img src={character.image} alt={character.name}/>
                    <h1>{character.name}</h1>
                    <p>ID: {character.id}</p>
                    <p>Estado: {character.status}</p>
                    <p>Género: {character.gender}</p>
                    <p>Especie: {character.species}</p>
                    <p>Origen: {character.origin.name}</p>
                    <p>Localización: {character.location.name}</p>
                </div>
            )}
        </div>
    )
}

export default PageCharacterDetail