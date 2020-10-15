import React from 'react'

import ReactLogo from '../images/1.png'
import JsLogo from '../images/js.png'
import CssLogo from '../images/css.jpg'
import nodeLogo from '../images/nodeLogo.jpg'
const Expertise = () => {
    return (
        <section id="expertise" className="std-width">
        <h1 className="ml-60">My Expertise</h1>
        <div className="box">

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src={ReactLogo} className="w-100 h-100" />
                    </div>
                    <div className="right w-500 pl-25 row-detail">
                        <h2>React.Js</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>

                
                    <div className="row-container">
                        <div className="left w-100 h-100">
                            <img src={JsLogo} className="w-100 h-100" /> 
                        </div>
                        <div className="right w-500 pl-25 row-detail">
                            <h2>JavaScript</h2>
                                <span>Even though I started working on JavaScript earlier, then I started working on React.js, but still, I can pick up Where I left.</span>
                        </div>
                    </div>

                    
                        <div className="row-container">
                            <div className="left w-100 h-100">
                                <img src={CssLogo} className="w-100 h-100" />
                            </div>
                            <div className="right w-500 pl-25 row-detail">
                                <h2>HTML & Css3</h2>
                                <span> I write HTML and CSS code for fun, so it makes me good at it.</span>
                            </div>
                        </div>

                        <div className="row-container">
                            <div className="left w-100 h-100">
                                <img src={nodeLogo} className="w-100 h-100" />
                            </div>
                            <div className="right w-500 pl-25 row-detail">
                                <h2>Node.JS</h2>
                                <span> I am still learning Node.Js, but I can work on a node if no one is available.</span>
                            </div>
                        </div>
        </div>
        </section>
    )
}

export default Expertise