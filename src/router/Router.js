import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage.js";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage.js";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage.js";
import { useRequestList } from "../hooks/useRequestList.js";
import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl.js";

export function Router() {
  const list = useRequestList(`${baseUrl}pokemon/?limit=60`, []);
  const [pokedexList, setPokedexList] = useState([]);
  const [openModalAdd, setModalAdd] = useState(false);
  const [openModalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    const storagePokedex = JSON.parse(window.localStorage.getItem("pokedex"));
    if (storagePokedex !== null) {
      if (storagePokedex.length !== 0) {
        setPokedexList(storagePokedex);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pokedex", JSON.stringify(pokedexList));
  }, [pokedexList]);

  const addToPokedex = (pokemonToAdd) => {
    const isInPokedex = pokedexList.find(
      (currentPokemon) => currentPokemon.name === pokemonToAdd.name
    );
    if (!isInPokedex) {
      const newPokedex = [...pokedexList, pokemonToAdd];
      setPokedexList(newPokedex);
      setModalAdd(true);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    setModalDelete(true);
    const newPokedex = pokedexList.filter(
      (currentPokemon) => currentPokemon.name !== pokemonToRemove.name
    );
    setPokedexList(newPokedex);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              list={list}
              pokedexList={pokedexList}
              addToPokedex={addToPokedex}
              removeFromPokedex={removeFromPokedex}
              openModalAdd={openModalAdd}
              setModalAdd={setModalAdd}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              list={list}
              pokedexList={pokedexList}
              removeFromPokedex={removeFromPokedex}
              addToPokedex={addToPokedex}
              openModalDelete={openModalDelete}
              setModalDelete={setModalDelete}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <DetailsPage
              pokedexList={pokedexList}
              addToPokedex={addToPokedex}
              removeFromPokedex={removeFromPokedex}
              openModalAdd={openModalAdd}
              setModalAdd={setModalAdd}
              openModalDelete={openModalDelete}
              setModalDelete={setModalDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
