import React from 'react'
import styles from './PhotoContent.module.scss'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments/PhotoComments'
import { UserContext } from '../../../userContext'
import { PhotoDelete } from '../PhotoDelete/PhotoDelete'
import { Image } from '../../Helper/Image/Image'

export const PhotoContent = ({data, single = false}) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ?
          <PhotoDelete id={photo.id} /> :
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          }

          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single}/>
    </div>
  )
}
