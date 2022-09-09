import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import FireComponents from './FireComponents'
import PersonsComponent from './PersonsComponent'
import Home from './Home'
import ChildrenComponent from './ChildrenComponent'
import '../style/Headers.css'

export default function Header() {
  return (
    <Router>
      <div>
        <nav className=" navbar navbar-dark bg-dark">
            <form className="container-fluid justify-content-start head">
              <Link to="/" type="button" className="btn btn-outline-success me-2">Home</Link>

              <Link to="/fire" type="button" className="btn btn-outline-success me-2">Fire</Link>
            
              <Link to="/children" type="button" className="btn btn-outline-primary me-2">Children</Link>
            
              <Link to="/persons" type="button" className="btn btn-outline-info">Persons</Link>
            </form>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/fire" element={<FireComponents />}/>
          <Route path="/children" element={<ChildrenComponent />}/>
          <Route path="/persons"element={<PersonsComponent />}/>
        </Routes>
      </div>
    </Router>
  );
}

