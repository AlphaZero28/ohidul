import React from 'react'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.name}>
            Ohidul Islam
        </div>
        <Link className={styles.item} to='/'>
            Home
        </Link>
        {/* <div className={styles.item}>
            Skills
        </div> */}
        <Link className={styles.item} to='/research'>
            Research
        </Link>
        <Link className={styles.item} to='/projects'>
            Projects
        </Link>
        <Link className={styles.item} to='/experience'>
            Experience
        </Link>
        <Link className={styles.item} to='/blog'>
            Blog
        </Link>
        {/* <Link className={styles.item}>
            Contact
        </Link> */}
    </div>
  )
}

export default Nav