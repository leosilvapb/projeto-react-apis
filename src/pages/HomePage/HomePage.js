import { Header } from "../../Components/Header/Header.js";
import { PokeList } from "../../Components/PokeList/PokeList.js";
import { Container } from "./style.js";
import { GlobalStyle } from "../../GlobalStyle.js";
import { AddModal } from "../../modal/AddModal.js";

export function HomePage(props) {
  const page = "home";
  const pokeList = props.list.filter((pokemon) =>
    !props.pokedexList.find(pokemonPokedex=>pokemonPokedex.name === pokemon.name)
  );
  return (
    <Container>
      <GlobalStyle />
      <Header page={page} />
      <PokeList
        page={page}
        pokeList={pokeList}
        addToPokedex={props.addToPokedex}
        removeFromPokedex={props.removeFromPokedex}
      />
      <AddModal isOpen={props.openModalAdd} setModalOpen={props.setModalAdd}/>
    </Container>
  );
}
