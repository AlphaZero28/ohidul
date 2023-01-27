import React from 'react'
import styles from './projects.module.css'
import UndergradProjects from './undergrad/UndergradProjects'
import Work from './Work'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.projects}>
            <div className={styles.title}>Undergraduate Projects</div>
                
                <UndergradProjects/>
            </div>



        </div>
    )
}

export default Projects