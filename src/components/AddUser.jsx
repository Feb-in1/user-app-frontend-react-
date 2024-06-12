import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const AddUser = () => {

    const [data, setData] = useState(
        {
            "name": "",
            "dob": "",
            "bg": "",
            "mob": "",
            "addr": "",
            "pin": "",
            "dist": "",
            "place": "",
            "em": "",
            "usrnam": "",
            "pass": "",
            "cpass": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }

    const readValue = () => {
        if (data.pass != data.cpass) {
            alert("Password's doesn't match")
        }
        else {
            axios.post("http://localhost:8081/add", data).then((response) => {
                console.log(response.data)
                if (response.data.status == "Success") {
                    alert("Added Successfully")
                }
                else {
                    alert(response.data)
                }
            }).catch(
                (error) => {
                    alert("Error")
                }
            )
            console.log(data)

        }
    }
    return (
        <div>
            <Nav />

            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" name='bg' value={data.bg} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="addr" className="form-control" value={data.addr} onChange={inputHandler}></textarea>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">District</label>
                                <select className='form-control' name="dist" value={data.dist} onChange={inputHandler}>
                                    <option value="-Select-">-Select-</option>
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Ernakulam">Ernakulam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasaragod">Kasaragod</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Malappuram">Malappuram</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Wayanad">Wayanad</option>

                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" name='em' value={data.em} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='usrnam' value={data.usrnam} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" name='pass' value={data.pass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="text" className="form-control" name='cpass' value={data.cpass} onChange={inputHandler} />
                            </div>




                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default AddUser