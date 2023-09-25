import {
  Container,
  BackHomeButton,
  Logo,
  PokedexButton,
  RemoveButton,
} from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { GlobalStyle } from "../../GlobalStyle.js";
import { goHome, goToPokedex } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { CaptureButton } from "../Card/style";

export function Header(props) {
  const testButton = true;
  const navigate = useNavigate();

  return (
    <Container>
      <GlobalStyle />
      {props.page !== "home" ? (
        <BackHomeButton onClick={() => goHome(navigate)}>
          Todos Pokémons
        </BackHomeButton>
      ) : (
        <BackHomeButton />
      )}
      <Logo src={pokemonLogo} />
      {props.page === "home" ? (
        <PokedexButton onClick={() => goToPokedex(navigate)}>
          Pokédex
        </PokedexButton>
      ) : props.page === "details" ? (
        props.inPokedex ? (
          <RemoveButton
            onClick={() => props.removeFromPokedex(props.currentPokemon)}
          >
            Excluir da Pokédex
          </RemoveButton>
        ) : (
          <CaptureButton
            onClick={() => props.addToPokedex(props.currentPokemon)}
          >
            Capturar Pokémon
          </CaptureButton>
        )
      ) : (
        <BackHomeButton></BackHomeButton>
      )}
    </Container>
  );
}
