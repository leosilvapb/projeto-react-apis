import { ContainerModal, Background, CloseBut } from "./style";

export function AddModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <Background onClick={()=>setModalOpen(false)}>
        <ContainerModal>
            <h1>Gotcha!</h1>
            <p>O Pokémon foi adicionado a sua Pokédex</p>
            <CloseBut onClick={()=>setModalOpen(false)}>X</CloseBut>
        </ContainerModal>
      </Background>

    );
  }
}
