import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

/**
 * This is a React component that renders a navigation bar with a link to view current employees.
 * @returns A React functional component called `Nav` that returns a navigation bar with a list item
 * containing a link to view current employees. The component is exported as the default export.
 */

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.listContainer}>
        <li>
          <Link className={styles.link} to="/list">
            View Current Employees
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
