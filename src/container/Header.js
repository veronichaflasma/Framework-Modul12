import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
        <div id="home" className="intro route bg-image" style={{backgroundImage: 'url(img/me-bg.png)'}}>
        <div className="overlay-itro" />
        <div className="intro-content display-table">
            <div className="table-cell">
            <div className="container">
                {/*<p class="display-6 color-d">Hello, world!</p>*/}
                <h1 className="intro-title mb-1">Framework Programming </h1>
                <h1 className="intro-title mb-1">Modul 12 </h1>
                {/* <p className="intro-subtitle"><span className="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong className="text-slider" /></p> */}
                {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Header