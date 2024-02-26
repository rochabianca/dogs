import React from 'react'
import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Button/Button'
import {Error} from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import {UserContext} from '../../userContext'
import { useFetch } from '../../Hooks/useFetch'
import Head from '../Helper/Head'

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const {response } = await request(url, options)
    if (response.ok) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section className='animeLeft'>
      <Head title="Crie sua Conta"/>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>{loading ? 'Cadastrando...' :  'Cadastrar'}</Button>
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate