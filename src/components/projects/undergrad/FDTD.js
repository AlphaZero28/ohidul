import React from 'react'
import fdtd_vid from '../../../assets/FDTD.mp4'
import flood from '../../../assets/flood.mp4'
import ReactPlayer from 'react-player'

function FDTD() {
    return (
        <div>
            <strong>
                Development of finite difference time domain (FDTD)
                method to analyze light propagation in a medium using MATLAB
            </strong>

            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                To model Maxwell's equations in a demo material, the
                Finite Difference Time Domain (FDTD) method was implemented
                in this repository. First, the finite difference approach
                was used to develop Maxwell's equation for a medium. These
                equations were then included in MATLAB. Finally, to see the
                results, the wave's progression was graphically monitored.
                Additionally, using two monitors, reflectance and
                transmittance were calculated. <br/>
                <a href='https://github.com/AlphaZero28/FDTD-1D-demo-simulation-MATLAB'> Github link</a>
            </p>
            <div
                style={{
                    'display': 'flex',
                    'justifyContent': 'center'
                }}
            >
                <ReactPlayer
                    url={fdtd_vid}
                    controls
                    width={'530px'}
                    height={'400px'}
                />
            </div>

        </div>
    )
}

export default FDTD