import React from 'react'
import SkillCard from './SkillCard'
import styles from './skills.module.css'

function Skills() {
    const progmSkills = ['C', 'Python', 'JavaScript', 'MATLAB & Simulink','html',  'CSS']
    const simuSkills = ['Lumerical (FDTD, Mode)', 'COMSOL Multiphysics', 'Ansys Maxwell', 'AutoCAD', 'ETAP & Proteus', 'Cadence Virtuoso']
    const docuSkills = ["Latex", 'OriginLab', "MS Office", 'Adobe Illustrator']
    const hardSkills = ['Raspberry Pi', 'Arduino', '8086 Microprocessor','Different ICS & Sensors']

    return (
        <>
            <div
                className={styles.headTxt}>
                Key Skills
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.skillRow}>
                    <SkillCard
                        title={'Programming & Numerical tools'}
                        skills={progmSkills}
                    />
                    <SkillCard
                        title={'Simulation & Design tools'}
                        skills={simuSkills}
                    />


                </div>

                <div className={styles.skillRow}>
                <SkillCard
                        title={'Document Preparation'}
                        skills={docuSkills}
                    />

                    <SkillCard 
                        title={'Hardware'}
                        skills={hardSkills}
                    />
                </div>

            </div>

        </>
    )
}

export default Skills