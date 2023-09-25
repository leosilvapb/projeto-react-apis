import {
  Container,
  InfosLeft,
  InfosRight,
  FrontImage,
  BackImage,
  Attributes,
  BaseStats,
  Moves,
  Move,
  Pokeball,
  Pokemon,
  Bar,
} from "./style";
import { InfoText } from "../Card/style";
import pokeball from "../../assets/pokeball-details.png";
import { GlobalStyle } from "../../GlobalStyle.js";
import { useRequestPokeData } from "../../hooks/useRequestPokeData";
import { TypeList } from "../Card/style";
import { Type } from "../Type/Type";
import { useEffect } from "react";
import { baseUrl } from "../../baseUrl";

export function CardDetails(props) {
  const pokemonData = useRequestPokeData(props.url, {
    id: 0,
    types: [],
    pictureUrl: "",
    color: "",
    name: "",
    pictureFront: "",
    pictureBack: "",
    moves: [],
    stats: [],
  });

  const totalStats = (stats) => {
    let total = 0;
    for (let stat of stats) {
      total += Number(stat.base_stat);
    }
    return total;
  };
  const total = totalStats(pokemonData.stats);

  props.setInPokedex(
    props.pokedexList.find(
      (pokedexPokemon) => pokedexPokemon.name === pokemonData.name
    )
      ? true
      : false
  );

  useEffect(
    () =>
      props.setCurrentPokemon({
        name: pokemonData.name,
        url: `${baseUrl}pokemon/${pokemonData.name}`,
      }),
    [pokemonData]
  );

  return (
    <Container color={pokemonData.color}>
      <GlobalStyle />
      <InfosLeft>
        <FrontImage src={pokemonData.pictureFront} />
        <Attributes>
          <h2>Stats</h2>
          <table width={"100%"}>
            {pokemonData.stats.map((stat) => {
              return (
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td>
                    <Bar
                      key={stat.stat.name}
                      total={total}
                      stat={stat.base_stat}
                    />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>
                <h4>Total</h4>
              </td>
              <td>{total}</td>
            </tr>
          </table>
        </Attributes>
        <BackImage src={pokemonData.pictureBack} />
      </InfosLeft>
      <Pokeball src={pokeball} alt="Pokeball" />
      <Pokemon src={pokemonData.pictureUrl} alt="Pokemon" />
      <InfosRight>
        <InfoText>
          <h3>#{pokemonData.id}</h3>
          <h1>{pokemonData.name}</h1>
        </InfoText>
        <TypeList>
          {" "}
          {pokemonData.types.map((pokeType) => {
            return <Type key={pokeType.type.name} type={pokeType.type.name} />;
          })}
        </TypeList>
        <Moves>
          <h2>Moves:</h2>
          {pokemonData.moves.slice(0, 19).map((move) => {
            return <Move key={move.move.move}>{move.move.name}</Move>;
          })}
        </Moves>
      </InfosRight>
    </Container>
  );
}
