import React from 'react'
import styles from './Footer.module.css'

/**
 * This is a React functional component that renders a footer with a white logo and a copyright notice.
 * @returns The `Footer` component is being returned, which contains a `footer` element with a white
 * logo image and a paragraph with a copyright notice.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.whiteLogo} src="/whitelogo.png" alt="white logo" />
      <p>© 2023 - All Rights Reserved</p>
    </footer>
  )
}

export default Footer
