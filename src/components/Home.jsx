import React from 'react'
import Nav from './Nav'

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                             
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control"/>
                                {/* //  name='name' value={data.name} onChange={inputHandler} /> */}
                            </div><br></br>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control"/> 
                                {/* name='dob' value={data.dob} onChange={inputHandler} /> */}
                            </div>
                             
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">LOG IN</button>
                            </div>
                            <a href="/add">New User? Click here to sign up...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home