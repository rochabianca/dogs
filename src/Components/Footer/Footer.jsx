import React from 'react'
import styles from './Footer.module.scss'
import Dogs from '../../../Assets/dogs-footer.svg?react'
function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer