import React from 'react'
import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
import { UserStorage } from './userContext'
import { User } from './Pages/User'
import { ProtectedRoute } from './Components/Helper/ProtectedRoute'
import { Photo } from './Components/Photo/Photo'
import { UserProfile } from './Components/User/UserProfile/UserProfile'
import { NotFound } from './Pages/NotFound/NotFound'

function App() {
  return <div className='App'>
    <BrowserRouter>
    <UserStorage>
      <Header/>
      <main className='AppBody'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login/*" element={<Login />}></Route>
          <Route path="conta/*" element={<ProtectedRoute><User/></ProtectedRoute>}
          ></Route>
          <Route path="foto/:id" element={<Photo />}></Route>
          <Route path="perfil/:user" element={<UserProfile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </UserStorage>
    </BrowserRouter>
  </div>
}

export default App
