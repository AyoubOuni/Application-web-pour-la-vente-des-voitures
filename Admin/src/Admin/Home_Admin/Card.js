import React from 'react';
import {RxCaretRight}  from 'react-icons/rx';
import './Home_Admin.css'

import {NavLink} from "react-router-dom"


function Card(props) {
  return (
    <>
    <div >
      <div title={props.name} className="card  mt-5 " style={{backgroundColor: '#434241',width: '450px'}}>
      <div style={{textOverflow:"hidden"}}  className="card-header h4 text-center  text-white text-nowrap">
      <NavLink className="text-white no_underline" to={props.link}>
<span className="border border-primary bg-primary text-center h5 ps-2 me-5 pe-5 position-relative " style={{left:'-51.5px'}} >
        <span className="position-relative ms-3 " style={{top:'-1.5px'}}>{props.name}</span> 

        <RxCaretRight className="position-relative ms-5" style={{left:'40px',top:'-3px'}}/> </span></NavLink>
    <span className="position-relative " style={{top:'-3px',left:'30px'}}>{props.picture} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {props.number}
  </span></span> <br/>
        
   <br/>
   <br/>
   <div className="h5 text-center text-nowrap">{props.description}</div>
     </div>
 
   </div>
    </div>
    </>
  )
}

export default Card