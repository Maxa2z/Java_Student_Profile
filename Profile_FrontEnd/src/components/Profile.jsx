import React from "react";
import axios from "axios";
import { Link , useParams } from "react-router-dom";
import Img from "./img";


function Profile() {
    let [data, setData] = React.useState({
        name : "",
        email : "",
        password : "",
        bio : "",
        contact : "",
        gender : ""
    });
    let {name,email,password,bio,contact,gender}=data;
    let {id} = useParams();

    let pro;
    React.useEffect(()=>{
        async function fetchData(){
            try{
                let res = await axios.get(`http://localhost:8080/Get/${id}`);
                setData(...res.data);
                console.log(res.data);
                // console.log(data);
            }catch(error){
                alert(error);
            }
        }
        fetchData();
    },[]);
    return (
            <div>
                    {/* <!--Profile page--> */}
                    <div className="container mt-5">
                        <div className="main-body">
                              <div className="row gutters-sm">
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                    {
                                                        (data.gender === "Male" || data.gender === "male" || data.gender === "m" || data.gender === "M") 
                                                        ? <Img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                                                        : <Img src="https://bootdey.com/img/Content/avatar/avatar8.png" />
                                                    }
                                                            <div class="mt-3">
                                                            <h4>{data.name}</h4>
                                                            <p class="text-secondary mb-1">{data.bio}</p>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                <div class="col-md-8">
                                  <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                                <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                {data.name}
                                                </div>
                                        </div>
                                      <hr/>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {data.email}
                                            </div>
                                        </div>
                                      <hr/>
                                      <div class="row">
                                            <div class="col-sm-3">
                                                <h6 className="mb-0">Bio</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {data.bio}
                                            </div>
                                        </div>
                                      <hr/>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h6 class="mb-0">Mobile</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {data.contact}
                                            </div>
                                        </div>
                                      <hr/>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h6 class="mb-0">Gender</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {data.gender}
                                            </div>
                                        </div>
                                      <hr/>
                                        <div class="row">
                                            <div class="col-sm-12">
                                            <Link to={`/Edit/${id}`} class="btn btn-info " href="EditProfile.html">Edit</Link>
                                            <Link to={`/Delete/${id}`} class="btn btn-info " href="EditProfile.html">Delete</Link>
                                            <Link to={`/ChangePass/${id}`} class="btn btn-info " href="EditProfile.html">Change Password</Link>
                                            </div>
                                        </div>
                                        <Link to={`/Logout`} className="btn btn-primary" href="" >Logout</Link>
                                    </div>
                                  </div>
                                </div>

                              </div>
                    
                            </div>
                        </div>
                </div>
    );
    }

export default Profile;