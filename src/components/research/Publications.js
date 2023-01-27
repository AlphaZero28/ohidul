import React from 'react'
import { Link } from 'react-router-dom'
function Publications() {
    return (
        <ul>
            <li style={{ 'textAlign': 'justify' }}>
                <strong>Title:</strong> <Link to={'https://www.sciencedirect.com/science/article/abs/pii/S0030402622015169'} >
                    Highly coherent supercontinuum generation in circular lattice photonic crystal fibers using low-power pulses
                </Link> <br />
                <strong>Authors:</strong> T. R. Shahriar, <strong>O. Islam</strong>, M. I. Tahmid, M. Z. Alam, M. S. Alam <br />
                <strong>Journal:</strong> Optik (Impact Factor: 2.84) <br />
                <strong>Publishers:</strong> Elsevier
            </li>

            <li style={{ 'textAlign': 'justify' }}>
                <strong>Title: </strong> <strong>[Under Review]</strong> Grated CdS electron transport layer-based perovskite solar
                cell with embedded plasmonic Au nanoparticles for absorption enhancement:
                optical, thermal, and electrical analysis. <br/>

                <strong>Authors:</strong>  <strong>O. Islam</strong>, M. H. K. Anik, S. Mahmud, J. Prokash, A. Habib, S. Islam <br />
                <strong>Journal:</strong> Solar Energy (Impact Factor: 7.188) <br />
                <strong>Publishers:</strong> Elsevier on behalf of the International Solar Energy Society

            </li>

        </ul>

    )
}

export default Publications