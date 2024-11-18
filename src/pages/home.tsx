import LayoutComponent from "../components/layouts/common-layout";
import styled from "styled-components";
import { useState } from "react";
import { CreatePostForm } from "../components/form/post-form";
import { Modal } from "../components/form/modal";
import Post from "../components/posts/post-container";



// Main container that holds everything
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items in a column by default (mobile view) */
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  background-color: #f0f2f5;
  border-radius: 8px;
  margin: 20px 0;
  width: 60%;
   height: 100vh; /* Set a fixed height */
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 480px) {
    flex-direction: column; 
    width: 60%;
  }
`;

// Container for input and button
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px; /* Spacing between input and posts */
`;

// Container for posts
const PostsContainer = styled.div`
  width: 100%; /* Ensure the posts take up full width */
  margin-top: 20px; /* Add spacing above posts */
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
    height: 4vh;
    width: 8vw;
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
          {/* Input section */}
          <InputContainer>
            <Input type="text" placeholder="What's on your mind?" />
            <Button onClick={openModal}>Add Post</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreatePostForm onClose={closeModal} />
            </Modal>
          </InputContainer>

          {/* Posts section */}
          <PostsContainer>
            <Post />
          </PostsContainer>
        </HomeContainer>
      </LayoutComponent>
    </>
  );
};

export default Home;
