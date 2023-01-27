import React from 'react'
import sq from '../../../assets/sq.png'
import sq_wave from '../../../assets/sqaure-wave.mp4'
import ReactPlayer from 'react-player'

function Sqaure() {
    return (
        <div>
            <strong>
                Generating a square wave using 50 epicyles:
            </strong>
            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                As per Fourier series any continuous signal may be constructed
                using proper sinusoids. This idea was tested using
                JavaScript (p5) to construct a square wave. I used 50 epicyles to
                make a almost perdect sqaure wave. <br />
                <a href='https://github.com/AlphaZero28/sq-wave-Fourier-Series-p5'>github link</a>
            </p>

            <div style={{
                'display': 'flex',
                'justifyContent': 'center'
            }}>
                {/* <img
                    src={sq}
                    alt='sq-wave'
                    style={{
                        'width': '500px',
                    }}
                /> */}
                <ReactPlayer
                    url={sq_wave}
                    controls
                    width={'450px'}
                    height={'300px'}
                />
            </div>

        </div>
    )
}

export default Sqaure