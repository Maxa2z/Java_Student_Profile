import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    let nav = useNavigate();
    let [data , setData] = React.useState({
        name : "",
        email : "",
        password : "",
        bio : "",
        contact : "",
        gender : ""
    });
    let {name,email,password,bio,contact,gender}=data;
    let onChangedata=(e)=>{
        setData({...data,[e.target.id]:e.target.value});
    };

    let submitData=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/AddData",data);
            alert("Data Added");
            nav("/");
        }catch(error){
            alert(error);
        }
        
    };

    return(
        <div>
            <h1>Register</h1>
            <form >
                <input type="text" placeholder="Name" id="name" value={name} onChange={(e)=>onChangedata(e)}></input><br></br>
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>onChangedata(e)}></input><br/>
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e)=>onChangedata(e)}></input><br/>
                <input type="text" placeholder="Bio" id="bio" value={bio} onChange={(e)=>onChangedata(e)}></input><br/>
                <input type="text" placeholder="Contact" id="contact" value={contact} onChange={(e)=>onChangedata(e)}></input><br/>
                <input type="text" placeholder="Gender" id="gender" value={gender} onChange={(e)=>onChangedata(e)}></input><br/>
                <button type="submit" onClick={(e)=>submitData(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Register;