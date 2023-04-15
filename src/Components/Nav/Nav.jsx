import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

/**
 * This is a React component that renders a navigation bar with a link to view current employees.
 * @returns A React functional component called `Nav` that returns a navigation bar with a list item
 * containing a link to view current employees. The component is exported as the default export.
 */

const Nav = () => {

  const location = useLocation()

  return (
    <nav className={styles.navigation}>
      <ul className={styles.listContainer}>
        <li>
          { location.pathname === '/list' ? 
          <Link className={styles.link} data-testid='navigation-link' to="/">
            Go to form
          </Link> : 
          <Link className={styles.link} data-testid='navigation-link' to="/list">
            View Current Employees
          </Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Nav
