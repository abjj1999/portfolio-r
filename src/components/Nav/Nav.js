import React from 'react'
import resume from '../../assets/resume/resume.pdf'
function Nav({ setContactSelected, setPortfoilioSelected, setHeaderSelected }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={function() {
                    setHeaderSelected(true)
                    setContactSelected(false)
                    setPortfoilioSelected(false)
                } }>About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={function() {
                    setHeaderSelected(false)
                    setContactSelected(false)
                    setPortfoilioSelected(true)
                } }>Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={function() {
                    setHeaderSelected(false)
                    setContactSelected(true)
                    setPortfoilioSelected(false)
                } }>Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href = {resume} download onClick={function() {
                    setHeaderSelected(false)
                    setContactSelected(false)
                    setPortfoilioSelected(false)
                } }>Resume</a>
            </li>
        </ul>

    )
}

export default Nav
