import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loadingSlice';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = createAsyncThunk('getAllUsers', async (_, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } finally {
    dispatch(setLoading(false));
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
});

export default userSlice.reducer;
