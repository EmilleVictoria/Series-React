import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Serie/index'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Filtro from './pages/Home/Filtro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
);
