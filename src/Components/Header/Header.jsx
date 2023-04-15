import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

/**
 * This is a React component that renders a header with a logo image and a link to the homepage.
 * @returns A React functional component named `Header` is being returned. It contains a header element
 * with a class name `styles.header` and an image element with a class name `styles.logo`. The image
 * source is set to `/logo.png` and an alternative text is set to `logo`. The image is wrapped in a
 * `Link` component that navigates to the root path `/` when clicked.
 */

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

