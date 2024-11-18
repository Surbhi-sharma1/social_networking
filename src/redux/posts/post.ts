// postSlice.ts
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../../components/posts/post-container";


// Define the initial state for posts
interface PostState {
  posts: PostType[];
}

const initialState: PostState = {
  posts: [
    {
      id: '1',
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "description",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    }
  ],
};

// Create the slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<PostType>) => {
        state.posts.push(action.payload);
      },
      prepare: (postData: Omit<PostType, 'id'>) => {
        const id = nanoid();
        return { payload: { ...postData, id } }; // Return the payload with the new ID
      },
    },
  },
});

// Export the actions and reducer
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
