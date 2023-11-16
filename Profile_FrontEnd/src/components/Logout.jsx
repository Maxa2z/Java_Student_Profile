import React from "react";
import { useNavigate } from "react-router-dom";
function Logout(){
    let nav = useNavigate();

    React.useEffect(()=>{
        out();
    }
    ,[]);
    let out=async()=>{
        try{
            alert("Logged Out");
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
export default Logout;