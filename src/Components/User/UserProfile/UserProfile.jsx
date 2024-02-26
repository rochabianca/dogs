import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../../Feed/Feed'
import Head from '../../Helper/Head'

export const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className='container mainSection'>
      <Head title={`Perfil de ${user}`} />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  )
}
