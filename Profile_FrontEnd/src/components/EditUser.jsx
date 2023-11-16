import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser(){
    let nav = useNavigate();
    let {id} = useParams();
    console.log(id);
    let [data , setData] = React.useState({
        name : "",
        email : "",
        password : "",
        bio : "",
        contact : "",
        gender : ""
    });
    let [dummyData ,setdummyData] = React.useState({
        name : "",
        email : "",
        password : "",
        bio : "",
        contact : "",
        gender : ""
    });
    let {name,email,password,bio,contact,gender}=data;
    let {name1,email1,password1,bio1,contact1,gender1}=dummyData;
    let onChangedata=(e)=>{
        setData({...data,[e.target.id]:e.target.value});
    };

    React.useEffect(()=>{
        load();
    }
    ,[]);


    let submitData=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/Update",data);
            let res = await axios.get(`http://localhost:8080/Login/${data.email}/${data.password}`);
            setData(...res.data);
            alert("Data Added");
            nav(`/Profile/${data.id}`);
        }catch(error){
            alert(error);
        }
    };

    let load=async()=>{
        try{
            let res = await axios.get(`http://localhost:8080/Get/${id}`);
            setData(...res.data);
        }catch(error){
            alert(error);
        }
    }

    return(
        <div>
            <h1>EditUser</h1>
            <form >
                <label for="name">Name :</label>
                <input type="text" placeholder={dummyData.name} id="name" value={data.name} onChange={(e)=>onChangedata(e)}></input><br></br>
                <label for="email">Email :</label>
                <input type="email" placeholder={dummyData.email} id="email" value={data.email} onChange={(e)=>onChangedata(e)}></input><br/>
                <label for="password">Password :</label>
                <input type="password" placeholder={dummyData.password} id="password" value={data.password} onChange={(e)=>onChangedata(e)} disabled ></input><br/>
                <label for="bio">Bio :</label>
                <input type="text" placeholder={dummyData.bio} id="bio" value={data.bio} onChange={(e)=>onChangedata(e)}></input><br/>
                <label for="contact">Contact :</label>
                <input type="text" placeholder={dummyData.contact} id="contact" value={data.contact} onChange={(e)=>onChangedata(e)}></input><br/>
                <label for="gender">Gender :</label>
                <input type="text" placeholder={dummyData.gender} id="gender" value={data.gender} onChange={(e)=>onChangedata(e)}></input><br/>
                <button type="submit" onClick={(e)=>submitData(e)}>Submit</button>
            </form>
        </div>
    );
}

export default EditUser;