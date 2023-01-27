import React from 'react'
import comm_1 from '../../../assets/comm.png'
import comm_2 from '../../../assets/comm_2.png'

function Com() {
    return (
        <div>
            <strong>
                Server less interconnected network with safety protocols
            </strong>

            <p style={{ 'textAlign': 'justify', 'paddingRight': '40px' }}>
                An interconnected system was designed using three Arduinos
                and a Raspberry Pi in a serverless network where any kind
                of hazard detection by one node would be disseminated by transmitter
                throughout the entire system. The device is designed in such 
                a way that, all the connected devices transmit and receive 
                threat detected by it's inputs. For now the inputs are 
                voice and switch. This device can be used to help who are 
                in distressed situations, such as fire, accident etc. The 
                device can also be used to control traffic by transmitting 
                traffic jam information to other vehicles.<br/>
                <a href='https://www.youtube.com/watch?v=uwdTtasW1ic&list=PLDdCA68y-W2WlVIO5jCpubAT7IUTYJyaI&index=9&ab_channel=EEESUSTPROJECTS' >Video link</a>
            </p>

            <div
                style={{
                    'display': 'flex',
                    'justifyContent': 'center'
                }}
            >
                <img
                    src={comm_1}
                    alt='comm-lab'
                    style={{
                        'width': '250px'
                    }}
                />
                <img
                    src={comm_2}
                    alt='comm-lab2'
                    style={{
                        'width': '250px',
                        'height': '410px',
                        'marginLeft': '50px'
                    }}
                />
            </div>
            


        </div>
    )
}

export default Com