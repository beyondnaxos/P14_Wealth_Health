import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to="/">
        <img className={styles.logo} src="/logo.png" alt="logo" />
        </Link>
    </header>
  )
}

export default Header