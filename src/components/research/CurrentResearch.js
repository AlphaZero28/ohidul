import React from 'react'

function CurrentResearch() {
    return (
        <ul>
            <li style={{
                'marginTop': '10px',
                'fontSize': '18px',
                'textAlign': 'left'
            }}>
                <strong>Frequency comb generation using machine learning
                    approach for data optimization. 
                </strong>
            </li>
            <li style={{
                'marginTop': '10px',
                'fontSize': '18px',
                'textAlign': 'left'
            }}>
                <strong>
                    Performace improvement of the Perovskite solar cell using grated electron transport layer and plasmonic nanoparticles for light harvesting.
                </strong>
                <ul>
                    <li> A planar perovskite solar cell was designed and investigated using Ansys Lumerical FDTD.</li>
                    <li>The planar electron transport layer was substitued by a CdS grating.</li>
                    <li>Plasmonic (gold) nanoparticles were inserted in the gaps between the gratings.</li>
                </ul>
            </li>
        </ul>
    )
}

export default CurrentResearch