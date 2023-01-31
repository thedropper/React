import React from 'react'
 
import { Link } from 'react-router-dom';




export default function Navbar(props) {
 
  
  
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === "dark" ? "black":"#DAE84A"}`}>
            <div className="container-fluid">   
              <Link className="navbar-brand" to="Textplace">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Textplace">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Darkmode">About</Link>
                  </li>
                  
                  
                </ul>
                <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height: '30px', width:'30px',cursor: 'pointer'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height: '30px', width:'30px',cursor: 'pointer'}}></div>
{/*                 
                <div className="form-check form-switch" style={{color: props.mode === "dark" ? "white":"black"}}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                  <label className="form-check-label" for="flexSwitchCheckDefault" style={{color: props.mode === "dark"? "white":"black"}}>{props.mode}</label> */}
                </div>
              </div>
            
          </nav>
    </div>
  )


}
Navbar.defaultProps = {title:"helloNav"}

