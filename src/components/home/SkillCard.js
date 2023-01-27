import React from 'react'
import styles from './skillCard.module.css'


function SkillCard({title, skills}) {
  return (
    <div className={styles.container}>
        <div className={styles.skillTitle} > {title} </div>

        {
            skills.map((skill,idx) => (
                <ul>
                    <li className={styles.item} key={idx}>{skill}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default SkillCard