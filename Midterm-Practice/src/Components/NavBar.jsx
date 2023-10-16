import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar({ loggedIn, signIn, signOut }) {
  return (
    <div className={styles.navbar}>
      <NavLink to="/home" className={styles.brand}>
        Simple NavBar!
      </NavLink>
      <div className={styles.rightContent}>
        <NavLink to="/todo-list" className={styles.navlink}>
          ToDo-List
        </NavLink>
        <NavLink to="/about" className={styles.navlink}>
          About
        </NavLink>
        <button onClick={loggedIn ? signOut : signIn} className={styles.button}>
          {loggedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}

export default NavBar