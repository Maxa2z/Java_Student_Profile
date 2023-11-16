import React from "react";
import axios from "axios";
import { useNavigate ,useParams } from "react-router-dom";


function ChangePass(){

    let {id} = useParams();
    let [string , setString] = React.useState("");
    let nav = useNavigate();
    let [data, setData] = React.useState({
        oldpass : "",
        newpass : "",
        confirmpass : ""
    });
    let {oldpass,newpass,confirmpass} = data;

    let onChangeData = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
      };

    let change = async (e) => {
        e.preventDefault();
        try{
            if(newpass === confirmpass){
            let res = await axios.get(`http://localhost:8080/Change/Pass/${id}/${oldpass}/${newpass}`);
            console.log(res.Json);
            if( res.data === "Success"){
                alert("Password Changed Successfully");
                nav(`/Profile/${id}`);
            }
        }
        else{
            alert("Password and Confirm Password must be same");
            nav(`/ChangePass/${id}`);
        
        }
        }
        catch(error){
            alert("PassWord Is InCorret");
            nav(`/ChangePass/${id}`);
        }
    }

    return(
        <div>
            <h1>Change Password</h1>
            <form>
                <input type="password" placeholder="Enter Old Password" id="oldpass" value={oldpass} onChange={(e)=>onChangeData(e)} ></input>
                <br />
                <input type="password" placeholder="Enter New Password" id="newpass" value={newpass} onChange={(e)=>onChangeData(e)} ></input>
                <br />
                <input type="password" placeholder="Confirm New Password" id="confirmpass" value={confirmpass} onChange={(e)=>onChangeData(e)} ></input>
                <br />
                <button type="submit" onClick={(e)=>change(e)} >Change Password</button>
            </form>
        </div>
    )
}

export default ChangePass;