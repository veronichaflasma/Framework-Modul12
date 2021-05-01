import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 col-md-5">
                            <div className="about-img">
                                <img src="img/profile.png" className="img-fluid rounded b-shadow-a" alt />
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-7">
                            <div className="about-info">
                                <p><span className="title-s">Name: </span> <span>Flasma Veronicha Hendryanna</span></p>
                                <p><span className="title-s">Profile: </span> <span>Student</span></p>
                                <p><span className="title-s">Email: </span> <span>veronichaflasma@gmail.com</span></p>
                                <p><span className="title-s">Phone: </span> <span>082338118330</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="skill-mf">
                            <p className="title-s">Skill</p>
                            <span>EAT</span> <span className="pull-right">85%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span>MENGAJI</span> <span className="pull-right">75%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span>STUDY</span> <span className="pull-right">50%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span>BUCIN</span> <span className="pull-right">90%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                            <h5 className="title-left">
                                About me
                            </h5>
                            </div>
                            <p className="lead">
                            我的名字是 Veronicha，
                            来自 Malang,
                             是 State Polytechnic of Malang Information Technology 的毕业生。
                            </p>
        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        )
    }
}

export default About