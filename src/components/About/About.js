import React from 'react'
import photo from '../../assets/personal/me.jpg';
import './about.css';
function About() {
    return (
        <div className = 'main-c' >
           <h1 className='h1 text-center'>About</h1>
           <div className="card--container">

            <img src={photo} className="my-img img-fluid" alt="dev Pic" />
            <div className="card" style={{width: '22rem'}}>
                <div className="card-body">
                <h5 className="card-title">Who Am I?</h5>
                <p className="card-text">I am a MERN stack developer based in Houston, Texas. <br /> 
                    I attend the University of Houston and expected to graduate in 2023. <br />
                    I have serious passion for full stack coding, I want to create the best applications for users to  <br />
                    have the most dynamic experiences.</p>
                </div>
            </div>
           </div>
        </div>

    )

}

export default About
