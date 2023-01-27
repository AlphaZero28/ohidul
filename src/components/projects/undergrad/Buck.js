import React from 'react'
import buck_pcb from '../../../assets/buck_pcb.png'
import buck_sim from '../../../assets/buck_sim.png'
import buck_result from '../../../assets/buck_result.png'

function Buck() {
    return (
        <div>
            <strong>
                Design of a 24 V to 15 V DC-DC buck Converter
            </strong>

            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                Design, simulation, and construction for closed-loop control
                of a dc-dc buck converter to output a maximum of 15 V at
                0.8 A. Voltage ripple level and current ripple level were
                respectively ≤ 1 % and ≤ 0.4 A at switching frequency greater
                than 20 kHz. The required load range was 18 Ω to 24 Ω where
                output vary with the load. Finally, the output voltage was regulated by PI
                controller for small variation of load and input voltage.
            </p>

            <div style={{
                'display': 'flex',
                'justifyContent': 'center',
                'marginBottom':'20px'
            }}>
                <img
                    src={buck_pcb}
                    alt='pcb-img'
                    style={{
                        'width': '400px',
                        'marginRight':'20px'
                    }}
                />

                <img
                    src={buck_result}
                    alt='pcb-img'
                    style={{
                        'width': '650px'
                    }}
                />

            </div>

            <div style={{'display':'flex','justifyContent':'center'}}>
            <img
                    src={buck_sim}
                    alt='pcb-img'
                    style={{
                        'width': '900px'
                    }}
                />
            </div>

            <p style={{ 'textAlign': 'center' }}>
                <strong>Figure:</strong> PCB design, circuit diagram & result of the simulation of the project.
            </p>

        </div>
    )
}

export default Buck