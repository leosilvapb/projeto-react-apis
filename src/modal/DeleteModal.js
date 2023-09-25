import { ContainerModal, Background, CloseBut } from "./style";

export function DeleteModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <Background onClick={()=>setModalOpen(false)}>
        <ContainerModal>
            <h1>Oh, no!</h1>
            <p>O Pokémon foi removido da sua Pokédex</p>
            <CloseBut onClick={()=>setModalOpen(false)}>X</CloseBut>
        </ContainerModal>
      </Background>

    );
  }
}