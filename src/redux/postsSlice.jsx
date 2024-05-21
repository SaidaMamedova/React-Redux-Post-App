import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loadingSlice';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPostsByUser = createAsyncThunk('getPostsByUser', async (userId, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return response.data;
  } finally {
    dispatch(setLoading(false));
  }
});

export const deletePostById = createAsyncThunk('deletePostById', async (postId, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
    console.log(response);
    return postId;
  } finally {
    dispatch(setLoading(false));
  }
});

const postsSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsByUser.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(deletePostById.fulfilled, (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    });
  }
});

export default postsSlice.reducer;
