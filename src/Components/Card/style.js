import styled from "styled-components";

export const Container = styled.article`
  background-color: ${(props) =>
    props.color === "white" ? "gray" : props.color};
  width: 23rem;
  height: 12rem;
  margin: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px 28px;
  justify-content: space-between;
  border-radius: 16px;
  margin: 20px 0;
`;

export const InfoText = styled.div`
  color: white;
  margin-bottom: 8px;
  > h1 {
    font-size: 32px;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
  > p {
    margin: 0;
  }
`;

export const PokeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    width: 146px;
    margin: 2px;
    height: 38px;
    border: none;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: gold;
      transform: translate(0, -5px);
      box-shadow: white 0px 0px 10px;
    }
    :active {
      transform: scale(1.2);
      background-color: lightgreen;
    }
  }
  > p {
    font-weight: bold;
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
`;

export const Pokeball = styled.img`
  position: absolute;
  right: -3px;
  top: 0;
  height: 12rem;
`;

export const PokeImage = styled.img`
  position: absolute;
  right: 10px;
  top: -54px;
  height: 193px;
  width: 193px;
`;

export const TypeList = styled.div`
  display: flex;
  gap: 4px;
`;

export const CaptureButton = styled.button`
    width: 146px;
    margin: 2px;
    height: 38px;
    border: none;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: gold;
      transform: translate(0, -5px);
      box-shadow: white 0px 0px 10px;
    }
    :active{
      transform: scale(1.2);
      background-color: lightgreen;
    }
    z-index: 5;
`;
export const RemoveButton = styled.button`
      background-color: orange;
    width: 146px;
    margin: 2px;
    height: 38px;
    border: none;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: gold;
      transform: translate(0, -5px);
      box-shadow: white 0px 0px 10px;
    }
    :active{
      transform: scale(1.2);
      background-color: lightgreen;
    }
    z-index: 5;
`;


