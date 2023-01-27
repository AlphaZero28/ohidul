import React from 'react'
import autocorr from '../../../assets/autocorr.png'
import fft from '../../../assets/fft.png'

function Speech() {
    return (
        <div>
            <strong style={{ 'textAlign': 'left' }}>
                Development and Evaluation of Speech Signal Suite using MATLAB
            </strong>

            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                A great deal of emphasis has been paid to the features of the 
                speech audio signal in this work. A set of algorithms for 
                recording, sampling, time and frequency domain analysis 
                was created. Sampling algorithm allows to downsample an 
                audio signal. Different time domain characteristics, such 
                as peak values, root mean square (RMS) values, zero crossing 
                rate (ZCR), and autocorrelation, are provided by time domain 
                algorithms. The frequency spectrum and power density 
                spectrum (PSD) were estimated using the direct FFT method 
                and Welch's approach, respectively, to obtain the results. 
                Researchers will be able to have a better understanding of 
                an audio signal and conduct further analysis as a result of 
                these findings. <br/>
                <a href='https://github.com/AlphaZero28/audio-analysis' >Github link</a>
            </p>

            <div
                style={{
                    'display': 'flex',
                    'justifyContent': 'center'
                }}
            >
                <img
                    src={autocorr}
                    alt='autocorelation-img'
                    style={{
                        'width': '420px'
                    }}
                />
                <img
                    src={fft}
                    alt='fft-img'
                    style={{
                        'width': '420px',
                        // 'height': '410px',
                        'marginLeft': '50px'
                    }}
                />
            </div>

        </div>
    )
}

export default Speech