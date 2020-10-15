import React from 'react'
import ProfilePic from '../images/shiv.jpg'

const About = () => {
    return (
        <section id="about" className="std-width">
            <div className="box">
                <div className="profile-summary">
                    <div className="profile-image">
                        <img src={ProfilePic} alt="Profile Image" className="profile-pic" />
                    </div>
                    <div className="profile-heading">
                        <h1>I M Shivaprasad</h1>
                        <p>
                            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                            shivaprasad.itagimath@gmail.com
                        </p>
                        <p>
                            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                            Bangalore, India
                        </p>
                        </div>
                    </div>
                    <div className="profile-description">
                        <h1>About Me</h1>
                        <p>Master's professional in computer applications looking for suitable opportunities to leverage my skills in the areas of software and web development, software testing, data analytics.
                       
                        </p>
                        <h1>Education</h1>
                        <p>Dayananda Sagar College Of Engineering, Bengaluru. - MCA</p>
                         
                        <p>K.L.E. Society’s Raja Lakhamagouda Science Institute, Belgaum - BSc</p>
                        </div>
                    </div>
        </section>
    )
}

export default About
