import React from 'react'
import {useState,useEffect} from 'react';
import './Home_Admin.css';
import {NavLink} from "react-router-dom"
import logo from './logo.png'
import {IoCarSport}  from 'react-icons/io5';
import {AiFillSetting}  from 'react-icons/ai';
import {ImUser}  from 'react-icons/im';
import {CgLogOut}  from 'react-icons/cg';
import {HiHome,HiShoppingCart}  from 'react-icons/hi';
import {MdOutlineArrowDropDown}  from 'react-icons/md';
import {FaRegUserCircle,FaUserAlt}  from 'react-icons/fa';
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Nav_Admin(props) {
  let history = useNavigate();

const decconect=()=>{
  document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
  document.cookie = "Username_admin=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
  history('/login');
}
  return (
    <div class=" sticky">
       <nav class="navbar navbar-dark navbar-expand-lg bg-dark ">

<div class="container-fluid ">
  <div class="navbar-brand" ><div className="d-flex justify-content-start " style={{marginLeft:'130px'}}>
<img src={logo} width="120" height="80" alt="Dashboard" className="position-relative text-white" style={{top:'3px'}}/>
<div className="mt-3 ms-2 h1">Dashboard</div>
</div></div>
  
<div className="d-flex justify-content-center h5 margin mt-2  text-white  "  > 

<NavLink to="/home_admin"  params={{ testvalue: "hello" }} className={({ isActive }) =>isActive ? "active" : "notactive"} style={{marginLeft: "-7.5px"}}    id="home"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><HiHome  className="position-relative" style={{top:'-3px',right:'4px'}}/>Home</span></NavLink>
<NavLink to="/users"  className={({ isActive }) =>isActive ? "active" : "notactive"} style={{marginLeft: "-7.5px"}}   id="users"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><ImUser size={19}  className="position-relative" style={{top:'-3px',right:'6px'}}/>Users</span></NavLink>
<NavLink to="/cars" className={({ isActive }) =>isActive ? "active" : "notactive"} style={{marginLeft: "-7.5px"}}   id="cars"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><IoCarSport size={21} className="position-relative" style={{top:'-3px',right:'5px'}}/>Cars</span></NavLink>
<NavLink to='/commandes' className={({ isActive }) =>isActive ? "active" : "notactive"} style={{marginLeft: "-7.5px"}}   id="commande"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><HiShoppingCart  className="position-relative" style={{top:'-3px',right:'4px'}}/>Commande</span></NavLink>
<NavLink to='/setting' className={({ isActive }) =>isActive ? "active" : "notactive"} style={{marginLeft: "-7.5px"}}  id="setting"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><AiFillSetting  className="position-relative" style={{top:'-3px',right:'4px'}}/>Setting</span></NavLink>


</div>
      <div className="d-flex justify-content-end  me-4 mt-2 text-white"  >
<div className="dropdown position-relative"  style={{top:'-4px',left:'12px'}}>
<button className="btn text-white btn-dark"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><MdOutlineArrowDropDown size={32}/>  </button>
<ul className="dropdown-menu bg-danger" aria-labelledby="dropdownMenuButton1">
  <li >
  <a className="dropdown-item drop" onClick={decconect} style={{cursor: 'pointer'}} ><CgLogOut/><span className="ms-1">Deconnect</span></a>
  </li>
</ul>
</div>
<div className=" ms-3 mt-1 h5">{props.username}</div>
<FaRegUserCircle size={43} className='ms-4 position-relative' style={{top:'-7px'}}/>
</div>        
    
  </div>

</nav>
    </div>
  )
}

export default Nav_Admin
