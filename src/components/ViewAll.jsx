import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log()
            }
        ).finally()
        
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Nav />

            <div class="container mt-5">
                <div class="row g-3">


                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">





                        <table class="table table-light table-striped table-hover">

                            <thead>
                                <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Date of birth</th>
                                    <th scope="col">Blood group</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.name}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.bg}</td>
                                                <td>{value.mob}</td>
                                                <td>{value.addr}</td>
                                                <td>{value.pin}</td>
                                                <td>{value.dist}</td>
                                                <td>{value.place}</td>
                                                <td>{value.em}</td>
                                                <td>{value.usrnam}</td>
                                                <td>{value.pass}</td>

                                            </tr>
                                        }
                                    )
                                }



                            </tbody>
                        </table>





                    </div>
                </div>





            </div>



        </div>
    )
}

export default ViewAll