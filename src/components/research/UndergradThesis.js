import React from 'react'
import SCG from '../../assets/thesis_scg.png'

function UndergradThesis() {
    return (
        <>
            <strong 
            style={{
                // 'fontWeight':'600',
                'marginTop':'10px',
                'fontSize':'18px',
                'textAlign':'left'
            }}
            >
                Two circular photonic crystal fibers (PCF) are designed and investigated for generating ultrabroadband supercontinuum in the mid-IR region.
            </strong>
            <ul>
                <li style={{textAlign:'left'}}>
                    Designed two high nonlinear PCF with <strong>Ge<sub>20</sub>Sb<sub>15</sub>Se<sub>65</sub> (GSS)</strong>  using Lumerical.
                </li>

                <li style={{textAlign:'left'}}>
                Additionally, we demonstrated a tolerance analysis of the structures to establish that they may still behave as predicted even
when there is only a little fabrication mismatch.
                </li>

                <li style={{textAlign:'left'}}>
                    Implementing <strong>split-step Fourier method (SSFM)</strong>  with Python to solve the <strong>nonlinear Schrodinger equation</strong>. Two highly coherent broadband SC were generated.
                </li>
                <li style={{textAlign:'left'}}>
                    Extensive characterization analysis including V-parameter, confinement loss,
                    dispersion analysis, non-linear coefficient, power spectrum density (PSD), the
                    spectral and temporal evolution of pulse, spectrogram, and coherence.
                </li>
            </ul>

            <img 
                src={SCG}
                alt='scg-img'
                style={{
                    'width':'700px'
                }}
            />

            <p><strong>Figure:</strong> Spectral and temporal evolutions at various propagation distances for pulse of 0.5 kW and 50 FWHM for structure-1.</p>
        </>
    )
}

export default UndergradThesis