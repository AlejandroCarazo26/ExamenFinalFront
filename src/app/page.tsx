"use client"

import { useEffect, useState } from "react";
import { Character, ResultCharacters } from "./types";
import { api } from "@/api/api";
import FilterStatus from "@/components/FilterStatus";
import FilterGender from "@/components/FilterGender";
import Paginador from "@/components/Paginador";
import CharacterChulo from "../components/Character";
import "./page.css"

const Home = () => {

  const [inputText, setInputText] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get(`/character/?page=${page}&name=${search}&status=${status}&gender=${gender}`)
      .then((res) => {
        const data: ResultCharacters = res.data;
        setCharacters(data.results.slice(0, 10));
        setTotalPages(data.info.pages);
      })
      .catch((e) => {
        setError(`Error cargando los personajes: ${e.message}`);
        setCharacters([]);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [search, page, status, gender])

  const handleBuscar = () => {
    setPage(1);
    setSearch(inputText);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleBuscar();
  }

  // resetear página cuando cambia un filtro
  useEffect(() => {
    setPage(1);
  }, [status, gender])

  return (
    <div className="MainPage">

      <div className="filters">
        <input
          className="searchInput"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="searchButton" onClick={handleBuscar}>
          Buscar
        </button>
        <FilterStatus status={status} setStatus={setStatus} />
        <FilterGender gender={gender} setGender={setGender} />
      </div>

      {loading && <h1>Cargando...</h1>}
      {error && <h2>{error}</h2>}

      <div className="searchResults">
        {characters.map((e) => (
          <CharacterChulo key={e.id} character={e} />
        ))}
      </div>

      <Paginador
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

    </div>
  );
};

export default Home;