import React from 'react'

import GitLogo from '../images/git.png'
import LinkedInLogo from '../images/In.png'
import PortfolioLogo from '../images/cv.png'

const Links = () => {
    return (
        <section id="expertise" className="std-width">
        <h1 className="ml-60">Links & Projects</h1>
        <div className="box">
            

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src={GitLogo} className="w-100 h-100" />
                    </div>
                    <div className="right w-500 pl-25 row-detail">
                        <h2>GitHub contributions</h2>
                        <span>@shivaprasad-IM is my username. My open source contributions include a simple TODO app
                            in reactJs and VanillaJs.</span>
                    </div>
                </div>

                
                    <div className="row-container">
                        <div className="left w-100 h-100">
                            <img src={LinkedInLogo} className="w-100 h-100" />
                        </div>
                        <div className="right w-500 pl-25 row-detail">
                            <h2>LinkedIn</h2>
                            <span>You can also find my complete profile at LinkedIn.Do send me a connection request
                                and we could chat more about opportunities.</span>
                        </div>
                    </div>

                    
                        <div className="row-container">
                            <div className="left w-100 h-100">
                                <img src={PortfolioLogo} className="w-100 h-100" />
                            </div>
                            <div className="right w-500 pl-25 row-detail">
                                <h2>Online Portfolio</h2>
                                <span>I create cool web application using ReactJs. Also, worked in back-end using NodeJs.</span>
                            </div>
                        </div>
            </div>
    </section>

    )
}

export default Links