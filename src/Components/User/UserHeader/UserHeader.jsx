import React from 'react'
import { UserHeaderNav } from './Components/UserHeaderNav'
import styles from './UserHeader.module.scss'
import { useLocation } from 'react-router-dom'

export const UserHeader = () => {
  const [title, setTitle ] = React.useState('')
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
        case '/conta/postar':
        setTitle('Adicionar Foto')
        break;
      default:
        setTitle('Minhas Fotos')
        break;
    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}
