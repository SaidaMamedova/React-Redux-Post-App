import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostDetails from './pages/PostDetails'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<HomePage/>}/> 
        <Route path='/user/:userId' element={<UserDetails/>}/>
        <Route path='/posts/:userId/:postId' element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App