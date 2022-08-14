import React from 'react'
import MainLayout from './components/Layouts/main.layout'
import Album from './components/Album/main.album'
import Post from './components/Post/main.post'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Album />} />
            <Route path="/posts" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </React.Fragment>
  )
}

export default App
