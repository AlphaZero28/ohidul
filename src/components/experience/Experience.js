import React from 'react'
import Skills from '../home/Skills'
import styles from './experience.module.css'

function Experience() {
    return (
        <div className={styles.container}>
            
            <div className={styles.position}>
                <div className={styles.title}>
                    Work & Leadership Experience
                </div>

                <ul>
                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>Data Analyst & Developer</strong> (Feb 2021- present)<br />
                    <a href='http://www.innovationgarage.com.bd/'>
                        Innovation Garage Limited
                    </a>
                    , Dhaka <br />
                    <strong>Application Development: </strong>
                    Created desktop, android, and web-based acessibility apps to aid visually impaired people. <br />
                    Android Studio, JavaScript, Python, OCR, PyQT5, React-Js. <br/>
                    <strong>Award:</strong> Merit Awards from BASIS National 
                    ICT Awards 2022 in Inclusions and Community category on behalf of Innovation Garage Limited.
                </li>

                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>General secretary</strong> (2020-2021)<br />
                    IEEE SUST Student Branch 
                </li>

                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>Assistant Academic Coordinator</strong> (2019-2020) <br />
                    SUST Science Area (SSA)
                </li>

                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>Assistant Organizing Secretary</strong> (2019-2020) <br />
                    IEEE SUST Student Branch 
                </li>

                <li style={{ 'textAlign': 'left' }}>
                    <strong>Campus Ambassador</strong> (2018)<br />
                    IEEE Student Professional Awareness Conference (SPAC) 2018. 
                </li>

                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>Treasurer and Organizing Secretary</strong> (2018)<br />
                    EEE SUST Cultural Night 2018. 
                </li>



                <li style={{ 'textAlign': 'left','paddingRight':'20px' }}>
                    <strong>General Member</strong> <br />
                    Copernicus Astronomical Memorial of SUST (CAMSUST)
                </li>
                </ul>
            </div>

            <div className={styles.skill}>
                <Skills />
            </div>

        </div>
    )
}

export default Experience