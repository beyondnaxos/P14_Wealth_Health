import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.whiteLogo} src="/whitelogo.png" alt="white logo" />
      <p>© 2023 - All Rights Reserved</p>
    </footer>
  )
}

export default Footer
