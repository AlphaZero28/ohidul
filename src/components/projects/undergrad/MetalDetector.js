import React from 'react'
import metal_ARC from '../../../assets/metal_arc.PNG'
import metal_ckt from '../../../assets/metal_ckt.jpg'
import metal_bot from '../../../assets/metal_bot.jpg'

function MetalDetector() {
    return (
        <div>
            <strong>
                Metal Detector Robot Vehicle Based
                on Raspberry Pi
            </strong>
            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                When looking for metallic objects like bombs, weapons, guns,
                knives, metal detector robots are crucial. Metal
                detection used to be done manually, but doing so may
                endanger our lives, like in the case of bomb detection.
                Our goal in this case is to put into action a robotic
                vehicle that is capable of sensing obstacles in its route.
                In this projects, we provide a method for a remote-controlled
                robot to find metals. The <strong>Raspberry Pi</strong> used to build this
                robot car, and we manually constructed a metal detector
                kit to be placed in front of it. When it detects metal,
                this metal detector will alter its buzzing sound.To operate
                the robot from our laptop, we have implemented the <b>TCP
                protocol</b> in Python. Additionally, we incorporate a camera
                into the robot to view its surroundings and course. The
                video stream will be sent to laptop. The entire system is incredibly user-friendly
                and simple to operate. The system architecture, circuit diagram and full image of 
                the vehicle with our group members is attached below. 
            </p>

            <div style={{
                'display':'flex',
                'justifyContent':'center',
                'marginBottom':'20px'
            }}>
                <img
                    src={metal_ARC}
                    alt='arc_img'
                    style={{
                        'width': '550px'
                    }}
                />
                <img
                    src={metal_ckt}
                    alt='arc_ckt'
                    style={{
                        'width': '450px',
                        'height': '258px',
                        'marginLeft': '20px',
                        'textAlign': 'center'
                    }}
                />

            </div>

            <div style={{
                'display':'flex',
                'justifyContent':'center'
            }}>
            <img
                    src={metal_bot}
                    alt='arc_ckt'
                    style={{
                        'display':'flex',
                        'width': '660px',
                        'height': '280px',
                        'marginLeft': '50px',
                        'textAlign': 'center'
                    }}
                />
            </div>


        </div>
    )
}

export default MetalDetector