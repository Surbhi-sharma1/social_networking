
import LayoutComponent from "../components/layouts/common-layout";
;
import styled from "styled-components";

import { useState } from "react";
import { CreatePostForm } from "../components/form/post-form";
import { Modal } from "../components/form/modal";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f0f2f5;
  border-radius: 8px;
  margin: 20px 0;
  width: 60%;
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: 480px) {
    flex-direction: row; 
    width: 60%; 
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 16px;
  @media (min-width: 480px) {
    margin-right: 10px; 
    width: auto; 
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #165eaf;
  }
  @media(min-width: 480px){
    margin-top: 0; 
  height:4vh;
width:8vw;
  }
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <LayoutComponent>
        <HomeContainer>
          <Input type="text" placeholder="What's on your mind?" />

          <Button onClick={openModal}>Add Post</Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CreatePostForm />
          </Modal>
        </HomeContainer>
      </LayoutComponent>
    </>
  );
};

export default Home;
