import React,{useState,useRef} from 'react'
import './Login.css'
import photo from './logo.png'
import {emailvalidation,passwordvalidation} from './../../Validation/Validation'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Login() {
  let history = useNavigate();
  const [connexion,setconnexion]=useState([]);
  const [champvide,setchampvide]=useState([]);
  var [Admin,setadmin]=useState({email:"",password:""});
  const [connexionIsValid, setconnexionValid] = useState(null);

  const mail = useRef();
  const passwordadmin = useRef();
  function showpassword() {
    var x = document.getElementById("validationTooltippassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const changer=(e)=>{
    setadmin({
    ...Admin,
    email:mail.current.value,
    password:passwordadmin.current.value})}
    
    let ft =new FormData();
    var i;
    var id;
    var Username;
    const valider=async(e)=>{
      if(Admin.email===""||Admin.password==="")
      {
        setchampvide(true);
      }
      else {
        setchampvide(false);
  
      }
      await e.preventDefault();
    await submit();
    if(i==1){
      document.cookie = `id_admin=${id}`;
      document.cookie = `Username_admin=${Username}`;
 

      console.log( document.cookie)
      history(`/home_admin`);

    }
    else
    {
      setconnexionValid(false);
      document.cookie = "id_admin=0";
      document.cookie = `Username_admin=`;

    }
    

    }
    
    
    const submit=async()=>{
      
      await ft.append('email',Admin.email);
      await ft.append('password',Admin.password);
     
    console.log(Admin.email+"|"+Admin.password);
    await fetch('http://localhost/Projet%20IHM/Admin/Login.php', {
      method: 'POST',
      body: ft
  })
   .then(function(response){
    return response.json();
  })
  .then(function(myJson) {
    setconnexion(myJson)
    
 i=myJson[0].n;
 id=myJson[0].Id;
Username=myJson[0].Nom+' '+myJson[0].Prenom;;


   
  });
}

     ;
  return (
    <div className="background ">
    <br/>
    <div id="titre" className="d-flex justify-content-center text-dark text-nowrap ">Login Admin</div>
    <img  className="my-5 rounded-5 img-fluid" src={photo} alt="logo de site" width="250" height="180"/>
    <form id="ayoub"className="row g-3 needs-validation" action=""  method="post"noValidate>
    <div className="row d-flex justify-content-center ms-1 ">
    <label htmlFor="validationTooltipemail" className="form-label text-center font" >E-mail</label>
    <div style={{width: '270px'}}>
    <div className=" has-validation">
    <input type="text" onChange={changer} ref={mail} name="email" className="form-control rounded-4 d-inline" id="validationTooltipemail" placeholder="Enter your Email" aria-describedby="validationTooltipUsernamePrepend" required />

    </div>
    </div>
    </div>
    <div className="row d-flex justify-content-center mt-2 ms-1">
    <label htmlFor="validationTooltippassword" className="form-label text-center font">Password</label>
    <div style={{width: '270px'}}>
    <div className="has-validation">
    <input type="password" onChange={changer} ref={passwordadmin} name="password" className="form-control rounded-4 d-inline " id="validationTooltippassword" placeholder="Enter your password" aria-describedby="validationTooltipUsernamePrepend" required />
    <div className="me-2 position-relative " style={{top:'-29px',left:'210px'}}><input onClick={showpassword} type="checkbox" className="me-2 form-check-input"/><label>Show password</label></div>
    {((connexionIsValid===false)&&(champvide===false))?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Le mot de passe entré est incorrect</div>:""}
{(champvide===true)?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Please enter your e-mail and password</div>:""}
    </div>
    </div>
    </div>
    <div className="col-12 ms-2 py-2">
    <button className="btn bg-primary rounded-4 px-5 mt-1 text-white" onClick={valider} type="submit"><span className='font'>Connect</span></button>
    </div>
    </form>  
    <br/>
    <br/>
    <br/> 
    </div>
  )
}

export default Login
