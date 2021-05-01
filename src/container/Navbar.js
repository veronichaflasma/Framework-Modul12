import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
          <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">Veronicha</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll " href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/mahasiswa">Task</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        )
    }
}

export default Navbar