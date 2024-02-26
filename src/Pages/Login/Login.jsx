import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from '../../Components/Login/LoginForm/LoginForm'
import LoginCreate from '../../Components/Login/LoginCreate'
import LoginPasswordLost from '../../Components/Login/LoginPasswordLost'
import LoginPasswordReset from '../../Components/Login/LoginPasswordReset'
import { UserContext } from '../../userContext'
import styles from './Login.module.scss'
import { NotFound } from '../NotFound/NotFound'

function Login() {
  const { login } = React.useContext(UserContext)

  if (login) {
    return <Navigate to='/conta'/>
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='criar' element={<LoginCreate/>}/>
          <Route path='perdeu' element={<LoginPasswordLost/>}/>
          <Route path='resetar' element={<LoginPasswordReset/>}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  )
}

export default Login