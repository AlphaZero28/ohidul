import React from 'react'
import { Link } from 'react-router-dom'
import CurrentResearch from './CurrentResearch'
import Publications from './Publications'
import styles from './research.module.css'
import UndergradThesis from './UndergradThesis'


function Research() {
    return (
        <div className={styles.container}>
            <div className={styles.research}>

                <div className={styles.title}>
                    Current Research
                </div>
                <CurrentResearch />

                <div className={styles.title}>
                    Undergraduate Thesis
                </div>
                <UndergradThesis />
            </div>

            <div className={styles.pub}>
                <div className={styles.title}>
                    Publications
                </div>
                <Publications />
            </div>

        </div>
    )
}

export default Research