import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    let [data, setData] = React.useState([]);

    React.useEffect(()=>{
        async function fetchData(){
            try{
                let res = await axios.get("http://localhost:8080/All");
                setData([...res.data]);
                console.log(res);
            }catch(error){
                alert(error);
            }
        }
        fetchData();
    },[]);
    return (
        <div>
            <h1>Home</h1>
            <Link to="/Add">Add</Link>
            <table>
            {
                data.map((x,i)=>{
                    return(
                        <tr>
                            <th key={x.id}>{x.id}</th>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.password}</td>
                            <td>{x.bio}</td>
                            <td>{x.contact}</td>
                            <td>{x.gender}</td>
                            <td><img src={x.image} alt="image"></img></td>
                            <td><Link to={`/Edit/${x.id}`}>Edit</Link></td>
                            <td><Link to={`/Delete/${x.id}`}>Delete</Link></td>
                        </tr>
                        );
                })
            }
            </table>
        </div>
    );
    }

export default Home;