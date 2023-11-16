import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(){
  let nav = useNavigate();
  let [data, setData] = React.useState({
    username: "",
    passw: "",
  });

  let { username, passw } = data;

  let onChangeData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

    let find =async (e)=>{
      e.preventDefault();
      try{
        let res = await axios.get(`http://localhost:8080/Login/${data.username}/${data.passw}`);
        let status = res.status;
        console.log(status);
        console.log(res.data);
        if(res.status === 200 ){
          nav(`/Profile/${res.data[0].id}`);
        }
        else{
          alert("Invalid Username or Password");
          nav("/");
        }
      }catch(e){
        alert("Invalid Username or Password");
        nav("/");
      }
  };
  return(
    <form>
      <input type="text" placeholder="Username" id="username" value={username} 
      onChange={(e)=>onChangeData(e)}></input>
      <br />
      <input type="password" placeholder="Password" id="passw" value={passw}
      onChange={(e)=>onChangeData(e)}></input>
      <br />
      <button type="submit" onClick={(e)=>find(e)}>Login</button>
      <button><Link to="/Add">Register</Link></button>
    </form>
  );
  }
export default Login;
