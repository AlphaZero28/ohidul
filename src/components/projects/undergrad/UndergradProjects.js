import React, { useState } from 'react'
import Buck from './Buck'
import Com from './Com'
import FDTD from './FDTD'
import Inc_Dec from './Inc_Dec'
import MetalDetector from './MetalDetector'
import Speech from './Speech'
import Sqaure from './Sqaure'
import styles from './undergradProjects.module.css'

function UndergradProjects() {
    // const simu = ['square', 'inc_dec', 'speech','FDTD']
    // const hard = ['metal', 'buck', 'comm']

    const typeList = ['All', 'simu', 'hard']

    const [type, setType] = useState('All')
    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    className={styles.btn}
                    onClick={() => setType('All')}
                >
                    All
                </button>

                <button
                    className={styles.btn}
                    onClick={() => setType('simu')}
                >
                    Simulation
                </button>

                <button
                    className={styles.btn}
                    onClick={() => setType('hard')}
                >
                    Hardware
                </button>

            </div>

            {
                type === 'All' ?
                    <ul>
                        <li className={styles.li}> <MetalDetector /> </li>
                        <li className={styles.li}> <FDTD /> </li>
                        <li className={styles.li}> <Buck /></li>
                        <li className={styles.li}> <Sqaure /> </li>
                        <li className={styles.li}> <Inc_Dec /> </li>
                        <li className={styles.li}> <Com /> </li>

                        <li className={styles.li}> <Speech /> </li>
                        
                    </ul>
                    : null
            }
            {
                type === 'simu' ?
                    <ul>
                        <li className={styles.li}> <FDTD /> </li>
                        <li className={styles.li}> <Sqaure /> </li>
                        <li className={styles.li}> <Inc_Dec /> </li>
                        <li className={styles.li}> <Speech /> </li>
                        
                    </ul>
                    : null
            }

            {
                type === 'hard' ?
                    <ul>
                        <li className={styles.li}> <MetalDetector /> </li>
                        <li className={styles.li}> <Buck /></li>
                        <li className={styles.li}> <Com /> </li>
                    </ul>
                    : null

            }


        </>

    )
}

export default UndergradProjects