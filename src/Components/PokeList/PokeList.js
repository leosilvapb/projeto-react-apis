import { Card } from "../Card/Card.js";
import { Container, List, ListTitle } from "./style.js";

export function PokeList(props) {
  return (
    <Container>
      {props.page === "home" ? (
        <ListTitle>Todos Pokémons</ListTitle>
      ) : (
        <ListTitle>Meus Pokémons</ListTitle>
      )}
      <List>
        {props.pokeList.length !== 0?(props.pokeList.map((pokemon) => {
          return (
            <Card
              key={pokemon.name}
              pokemon={pokemon}
              addToPokedex={props.addToPokedex}
              removeFromPokedex={props.removeFromPokedex}
              page={props.page}
            />
          )}))
         : (<h1>Sua Pokédex está vazia</h1>)
          }
        
      </List>
    </Container>
  );
}
