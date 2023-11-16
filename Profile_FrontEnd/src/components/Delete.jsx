import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser(){
    let {id} = useParams();
    let nav = useNavigate();
    React.useEffect(()=>{
        delet();
    }
    ,[]);
    let delet=async()=>{
        try{
            await axios.get(`http://localhost:8080/Delete/${id}`);
            alert("Data Deleted");
            nav("/");
        }catch(error){
            alert(error);
        }
    }
    return(
        <div>
        </div>
    );
}

export default EditUser;