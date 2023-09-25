import styled from "styled-components";

export const Container = styled.div`
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
background-color: ${(props) => props.color};
width: 80px;
height: 31px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 20px;
text-transform: capitalize;
`;
