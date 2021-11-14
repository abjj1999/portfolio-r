import React from 'react'
import Nav from '../Nav/Nav'
import './header.css';
function Header(props) {
    const {contactSelected, setContactSelected, portfolioSelected, setPortfoilioSelected, headerSelected, setHeaderSelected } = props;
    return (
        <div className = 'container-in'>
            <h4 className = "header-title">AB</h4>
            <Nav setContactSelected = {setContactSelected} setPortfoilioSelected = {setPortfoilioSelected} setHeaderSelected={setHeaderSelected}></Nav>
        </div>
    )
}

export default Header
