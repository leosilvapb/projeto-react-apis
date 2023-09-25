import styled from "styled-components";

export const Container = styled.section`
  background-color: #5e5e5e;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const ListTitle = styled.h1`
  color: white;
  width: 420px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
`;

export const List = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    >h1{
      grid-column: 1/4;
      justify-self: center;
      font-size: 36px;
      color: white;
    }
    @media screen and (width < 800px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
`
