import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
        © 2022 All Right Reserved by <span className={styles.name}> Ohidul Islam</span>
    </div>
  )
}

export default Footer