import React from 'react'
import styles from './PhotoDelete.module.scss'
import { PHOTO_DELETE } from '../../../api'
import { useFetch } from '../../../Hooks/useFetch'

export const PhotoDelete = ({id}) => {
  const { loading, request } = useFetch();
  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const {url, options} = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if(response.ok) {
        window.location.reload()
      }
    }
  }
  return (
    <>
      <button onClick={handleClick} disabled={loading} className={styles.delete}>{loading ? 'Carregando...' : 'Deletar'}</button>
    </>
  )
}
