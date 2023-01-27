import React from 'react'
import vlsi_lay from '../../../assets/vlsi_lay.png'
import vlsi_ckt from '../../../assets/vlsi_ckt.png'
function Comparator() {
    return (
        <div>
            <strong style={{ 'textAlign': 'left' }}>
                Design of a 4-bit increment/decrement circuit using Cadence virtuoso with DRC,
                LVS check:
            </strong>

            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                In modern age we often use various types of digital technology
                such as Microprocessors, micro-controllers and other kinds of
                processor. In these processor it is often necessary to increment
                or decrements a bit with respect to address calculation for
                accessing data, using storage. So, an incrementer/decrementer
                has lots of application and usage in modern processor
                technology. In this project, we built a 4 bit increment/decrement
                circuit  using CMOS technology. Additionally, the outcomes of the
                 project were checked with the result found from verilog code.
            </p>

            <div style={{
                'display': 'flex',
                'justifyContent': 'center'
            }}>
                <img
                    src={vlsi_ckt}
                    alt='VLSI-ckt'
                    style={{
                        'width': '450px'
                    }}
                />
                <img
                    src={vlsi_lay}
                    alt='VLSI-layout'
                    style={{
                        'width': '450px',
                        'marginLeft':'50px'
                    }}
                />

            </div>
            <p style={{'textAlign':'center'}}>
                <strong>Figure:</strong> Schematic and layout of the 4 bit
                 increment/decrement circuit.
            </p>
        </div>
    )
}

export default Comparator