import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 35vh;
  left: 35vw;
  transform: translate(-50%, -50%);
  height: 222px;
  width: 451px;
  border-radius: 12px;
  background-color: #FFFFFF;
  color: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
    transition: 0.5s;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .6);
  z-index: 1000;
`;

export const CloseBut = styled.div`
    font-size: 18px;
    color: gray;
    position: absolute;
    top: 6px;
    right: 12px;
    cursor: pointer;

`;
