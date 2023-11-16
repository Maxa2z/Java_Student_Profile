import React from "react";
import Home from "./Home";
import Register from "./Register";
import EditUser from "./EditUser";
import Delete from "./Delete";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import ChangePass from "./ChangePass";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>

      <Routes>
        <Route exact path="/" element=<Login />/>
        <Route exact path="/Home" element=<Home />/>
        <Route exact path="/Add" element=<Register />/>
        <Route exact path="/Edit/:id" element=<EditUser />/>
        <Route exact path="/Delete/:id" element=<Delete />/>
        <Route exact path="/Profile/:id" element=<Profile />/>
        <Route exact path="/Logout" element=<Logout />/>
        <Route exact path="/ChangePass/:id" element=<ChangePass />/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
