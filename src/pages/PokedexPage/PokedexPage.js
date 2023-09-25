import { Header } from "../../Components/Header/Header";
import { PokeList } from "../../Components/PokeList/PokeList.js";
import { Container } from "./style.js";
import { GlobalStyle } from "../../GlobalStyle";
import { DeleteModal } from "../../modal/DeleteModal";

export function PokedexPage(props) {
  const page = "pokedex";
  return (
    <Container>
      <DeleteModal isOpen={props.openModalDelete} setModalOpen={props.setModalDelete}/>
      <GlobalStyle />
      <Header page={page} />
      <PokeList
        page={page}
        pokeList={props.pokedexList}
        removeFromPokedex={props.removeFromPokedex}
        addToPokedex={props.addToPokedex}
      />
    </Container>
  );
}
