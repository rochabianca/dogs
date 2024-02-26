import React from 'react'
import styles from './FeedPhotosItem.module.scss'
import { Image } from '../../../Helper/Image/Image'

export const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick(params) {
    setModalPhoto(photo)
}
  return (
    <li className={styles.photo} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}
