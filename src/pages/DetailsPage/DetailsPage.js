import { Header } from "../../Components/Header/Header";
import { ListTitle } from "../../Components/PokeList/style.js";
import { Main } from "./style.js";
import background from "../../assets/background-details.png";
import { BackgroundImage, Container } from "./style.js";
import { CardDetails } from "../../Components/CardDetails/CardDetails";
import { GlobalStyle } from "../../GlobalStyle";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import { useState } from "react";
import { AddModal } from "../../modal/AddModal";
import { DeleteModal } from "../../modal/DeleteModal";

export function DetailsPage({
  pokedexList,
  addToPokedex,
  removeFromPokedex,
  openModalAdd,
  setModalAdd,
  openModalDelete,
  setModalDelete
}) {
  const pathParams = useParams();
  const page = "details";
  const [inPokedex, setInPokedex] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({ name: "", url: "" });

  return (
    <Container>
      <GlobalStyle />
      <Header
        page={page}
        inPokedex={inPokedex}
        addToPokedex={addToPokedex}
        removeFromPokedex={removeFromPokedex}
        currentPokemon={currentPokemon}
      />
      <Main>
        <BackgroundImage src={background} alt="Background-Ball" />
        <ListTitle>Detalhes</ListTitle>
        <CardDetails
          url={`${baseUrl}pokemon/${pathParams.id}`}
          setInPokedex={setInPokedex}
          pokedexList={pokedexList}
          setCurrentPokemon={setCurrentPokemon}
        />
      </Main>
      <AddModal isOpen={openModalAdd} setModalOpen={setModalAdd} />
      <DeleteModal isOpen={openModalDelete} setModalOpen={setModalDelete}/>
    </Container>
  );
}
