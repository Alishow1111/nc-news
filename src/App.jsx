import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ArticleContainer from './components/ArticleContainer'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage'
import Profiles from './components/Profiles'



function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path= "/articles/:article_id" element={<ArticlePage />} />
        <Route path= "/profiles" element={<Profiles />} />
      </Routes>
    </div>
  )
}

export default App
