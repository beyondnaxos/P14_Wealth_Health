import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.navigation}>
        <ul className={styles.listContainer}>
            {/* <li>
                <Link to="/">Home</Link>
            </li> */}
            <li>
                <Link className={styles.link} to="/list">View Current Employees</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav