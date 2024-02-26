import React from 'react'
import styles from './Input.module.scss'

function Input({label, type, name, value, onChange, error, onBlur}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input