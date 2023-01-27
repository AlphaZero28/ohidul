import React from 'react'
import styles from './home.module.css'
import profile from '../../assets/mrfox.webp'
import me from '../../assets/me.jfif'
import Skills from './Skills'
import InterestList from './InterestList'

function Home() {
    const aboutTxt = "Hello There! I am Ohidul Islam, recently\
     obtained my undergraduate degree at Electrical and Electronic\
      Engineering. My undergraduate thesis topic was 'Highly Coherent \
      Supercontinuum Generation in Circular photonic fiber crystal using \
      low power pulse where Ansys Lumerical and Python's pyNLO package are used . These days, \
      I am working on frequency comb generation and improving performace \
      of Perovskite solar cells."
    return (
        <div className={styles.home}>
            <div className={styles.personal}>
                <div className={styles.me}>
                    <img
                        src={me}
                        alt='profile-img'
                        className={styles.profile_img}
                    />
                    <div style={{ 'fontSize': '35px', 'fontWeight': '600' }} >
                        Ohidul Islam
                    </div>
                    <div>
                        <b>Email:</b> ohidulislam4860@gmail.com, ohidul23@student.sust.edu
                    </div>
                    <b style={{ 'display': 'block' }}>Links:</b>

                    <div style={{ 'color': 'black' }}>
                        <a
                            href='https://github.com/AlphaZero28'
                            style={{ 'marginRight': '10px', 'color': 'black' }}
                        >
                            <i class="fa-brands fa-github fa-2x" ></i>
                        </a>

                        <a
                            href='https://www.linkedin.com/in/ohidul-islam-927371151/'
                            style={{ 'marginRight': '10px', 'color': 'black' }}
                        >
                            <i class="fa-brands fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.about}>
                    <div className={styles.smallHeadTxt} >
                        About me
                    </div>
                    <div className={styles.aboutTxt}>
                        {aboutTxt}
                    </div>

                    <div className={styles.intEduContainer}>
                        <div className={styles.interest}>
                            <div className={styles.smallHeadTxt}>
                                Interests
                            </div>
                            <InterestList />

                        </div>
                        <div className={styles.edu}>
                            <div className={styles.smallHeadTxt}>
                                Educations
                            </div>

                            <ul>
                                <li style={{ 'textAlign': 'left' }}>
                                    B.Sc. (Engg) in Electrical & Electronic Engineering (2016-2021) <br />
                                    <span>
                                        Shahjalal University of Science & technology
                                    </span>
                                </li>

                                <li style={{ 'textAlign': 'left' }}>
                                    Higher School Certificate in Science (2013-2015) <br />
                                    <span>Ispahani Public School & College</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.single} />

                </div>
            </div>

            {/* <Skills /> */}
        </div>
    )
}

export default Home