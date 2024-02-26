import React from 'react'
import { UserHeader } from '../Components/User/UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import { Feed } from '../Components/Feed/Feed'
import { UserPhotoPost } from '../Components/User/UserPhotoPost/UserPhotoPost'
import { UserStats } from '../Components/User/UserStats'
import { UserContext } from '../userContext'
import { NotFound } from './NotFound/NotFound'
import Head from '../Components/Helper/Head'

export const User = () => {
  const { data } = React.useContext(UserContext)
  return (
    <section className='container'>
      <Head title="Minha Conta"/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>} />
        <Route path="postar" element={<UserPhotoPost/>} />
        <Route path="estatisticas" element={<UserStats/>} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  )
}
