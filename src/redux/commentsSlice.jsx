import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  loading: false,
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getCommentsByPost = createAsyncThunk('getCommentsByPost', async (postId) => {
  const response = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsByPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCommentsByPost.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
  },
});

export default commentsSlice.reducer;
