import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import userSlice from './userSlice'
import postsSlice from './postsSlice'
import commentsSlice from './commentsSlice'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
    posts: postsSlice,
    comments: commentsSlice
  },
})