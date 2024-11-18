import  { useState } from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



export const PostContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  top:6vh;
  justify-content: center;
   margin-top: 20px;
    max-height: 60vh;
    height: 60vh;
  overflow-y: auto;
`;

export const PostWrapper = styled.div`
  width: 1100px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UserName = styled.span`
  font-weight: bold;
  color:black;
`;

export const DateSpan = styled.span`
  font-size: 12px;
  color: gray;
`;

export const ContentSection = styled.div`
  margin-top: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

export const InteractionSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const InteractionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: gray;

  & > svg {
    margin-right: 5px;
  }
`;

export interface PostType {
  id: string;
  name: string;
  userId: number;
  profilePic: string;
  desc: string;
  img?: string; // img is optional
};

const Post = () => {
  const posts=useSelector((state:RootState)=>state.post.posts)
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const liked: boolean = false; // TEMPORARY

  return (
    <>
    {posts.map((post:PostType) => (
      <PostContainer key={post.id}>
      <PostWrapper>
        <UserSection>
          <UserInfo>
            <UserImage src={post.profilePic} alt="" />
            <Details>
           <StyledLink to={`/profile/${post.userId}`}>
                <UserName>{post.name}</UserName>
              </StyledLink>
              <DateSpan>1 min ago</DateSpan>
            </Details>
          </UserInfo>
          <MoreHorizIcon />
        </UserSection>
        <ContentSection>
          <Description>{post.desc}</Description>
          {post.img && <PostImage src={post.img} alt="post" />}
        </ContentSection>
        <InteractionSection>
          <InteractionItem>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </InteractionItem>
          <InteractionItem onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </InteractionItem>
          <InteractionItem>
            <ShareOutlinedIcon />
            Share
          </InteractionItem>
        </InteractionSection>
        {/* {commentOpen && <Comments />} */}
      </PostWrapper>
      </PostContainer>
      ))}
    </>
  );
};

export default Post;
