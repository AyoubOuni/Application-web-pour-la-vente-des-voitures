import React from 'react'
import './Nav_user.css';
import {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import {AiFillHome}  from 'react-icons/ai';
import {CgLogOut}  from 'react-icons/cg';
import {BsExclamationCircleFill} from 'react-icons/bs';
import {MdManageAccounts}  from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi';
import {RiShoppingCartLine} from 'react-icons/ri';
import {IoCarSport} from 'react-icons/io5';
import logo from './logo.png'
import {FaRegUserCircle}  from 'react-icons/fa';
import {MdOutlineArrowDropDown}  from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

export default function Nav_user(props) {
    let history = useNavigate();

    const decconect=()=>{
        document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "Username=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "photo=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        history('/user_login');
      }
    
    return(
        <>
      
        <span className="sticky " >
      
        <div className="blue mb-5"> <span className="" ><img  className="position-relative" style={{bottom:'17px',left:'80px'}}  src={logo} width='150' height='100' ></img></span> 
    <div className="d-flex justify-content-center  position-relative" style={{bottom:'40px',marginLeft:'230px'}} >
       <div className="marg">
       <span className="marg2">
       <NavLink  to="/home" style={{cursor:'pointer'}} className={({ isActive }) =>isActive ? 'activenav' : 'notactive' }> <span className="position-relative " style={{bottom: "2.5px",marginRight:'2px',cursor:'pointer'}}><AiFillHome/></span>Home</NavLink>
       <NavLink to="/cars" className={({ isActive }) =>isActive ? 'activenav' : 'notactive' }> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><IoCarSport/></span>Cars</NavLink>
       <NavLink to="/commandes" className={({ isActive }) =>isActive ? 'activenav' : 'notactive' }> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><FiShoppingCart size={19}/></span>Commandes</NavLink>
       <NavLink to="/account" className={({ isActive }) =>isActive ? 'activenav' : 'notactive' }> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><MdManageAccounts size={24}/></span>Account</NavLink>
       <NavLink to="/about" className={({ isActive }) =>isActive ? 'activenav' : 'notactive' }> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><BsExclamationCircleFill size={17}/></span>About</NavLink>



       </span>
      
        </div>
        
    </div>
    </div>
    <div className="d-flex justify-content-end   mt-2 text-white position-relative" style={{bottom:'75px',marginRight:'50px'}}  >

<div className="dropdown position-relative"  style={{top:'-4px',left:'12px'}}>
<button className="btn text-white  me-2"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><MdOutlineArrowDropDown size={32}/>  </button>
<ul className="dropdown-menu bg-danger" aria-labelledby="dropdownMenuButton1">
  <li >
  <a className="dropdown-item drop h4 mt-2 bg-danger" onClick={decconect}  style={{cursor: 'pointer'}} ><CgLogOut/><span className="ms-1">Deconnect</span></a>
  </li>
</ul>
</div>
<div className=" ms-3 mt-1 h3 me-2 head">{props.username}</div>
{(props.photo===`images/${props.id}/`)?<FaRegUserCircle  size={40}  className='ms-4 position-relative  ' style={{top:'-7px'}}/>:<img src={'http://localhost/Projet%20IHM/User/'+props.photo} width='40' height='40'  className='ms-4 position-relative rounded-5 ' style={{top:'-7px'}}/>}

</div>    
  
   
    </span>

    </>
   )
}
