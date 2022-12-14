import React,{useState} from 'react'
import  './Connexion.css'
import {FaUserCircle}  from 'react-icons/fa';
import {HiLockClosed}  from 'react-icons/hi';
import {MdAlternateEmail}  from 'react-icons/md';
import {AiFillPlusCircle,AiOutlineEye,AiOutlineEyeInvisible}  from 'react-icons/ai';
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


function Connexion() {
  let history = useNavigate();

  const [connexionIsValid,setconnexion]=useState([]);
  const [champvide,setchampvide]=useState([]);
  let ft =new FormData();
  var i;
  var id;
    var Username;
    var photo;
  var [User,setuser]=useState({email:"",password:""});
  function showpassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const valider=async(e)=>{
    await e.preventDefault();
    if(User.email===""||User.password==="")
    {
      setchampvide(true);
    }
    else {
      setchampvide(false);

    }
  await submit();
  if(i==0){
   
    setconnexion(false);
    document.cookie = "id=0";
    document.cookie = `Username=`;

  }
  else if(i==1){

    document.cookie = `id=${id}`;
    document.cookie = `Username=${Username}`;
    document.cookie = `photo=${photo}`;

    console.log( document.cookie)
    history(`/home`);

  }
  }
  const submit=async()=>{
      
    await ft.append('email',User.email);
    await ft.append('password',User.password);
   
  console.log(User.email+"|"+User.password);
  await fetch('http://localhost/Projet%20IHM/User/Login.php', {
    method: 'POST',
    body: ft
})
 .then(function(response){
  return response.json();
})
.then(function(myJson) {
  setconnexion(myJson)
  
i=myJson[0].n;
id=myJson[0].Id_user;
Username=myJson[0].Nom+' '+myJson[0].Prenom;
photo=myJson[0].url;


 
});
}
  return (
    
      <div className="container">
       <div className="form-box">
         <div className="header-form">
           <h4 className=" mb-5 text-center" style={{color:'black'}}><FaUserCircle size={110} /></h4>
           <div className="image">
           </div>
         </div>
         <div className="body-form">
          <form>
            <div className="row">
             <div className="input-group mb-4   ">
  <div className="input-group-prepend">
   <span className="input-group-text h-100 px-3 position-relative " style={{left:'6px'}}><MdAlternateEmail size={25}/></span>
 </div>
 <input type="email" className="form-control"  onChange={(e) => {setuser({ ...User, email: e.target.value });}}style={{height:'40px',fontSize:'18px'}}  placeholder="E-mail" />
</div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
  <span className="input-group-text h-100 px-3 position-relative" style={{left:'6px'}}><HiLockClosed size={25}/></span>
</div>
 <input type="password" id="password" onChange={(e) => {setuser({ ...User, password: e.target.value });}} className="form-control " style={{height:'40px',fontSize:'18px'}} placeholder="Password" />
</div>
<div className="me-2 position-relative h6 " style={{top:'-2px',left:'13px'}}><input onClick={showpassword} type="checkbox" className="me-2 form-check-input"/><label className="mt-1">Show password</label></div>
{((connexionIsValid===false)&&(champvide===false))?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Le mot de passe entré est incorrect</div>:""}
{(champvide===true)?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Please enter your e-mail and password</div>:""}

<div className='d-flex justify-content-center mt-5'>
<button type="button" onClick={valider} className="btn btn-primary btn-block  text-center text-nowrap " style={{width:'255px',height:'50px',fontSize:'23px'}}>Login</button>
</div>
<div className="d-flex justify-content-end">
<div className="mt-5"><a style={{fontSize:'17px',textDecoration:'none'}}href="#">Forgot your password</a></div>
</div>
<div className="d-flex justify-content-center d-inline mt-4">
<span className="w-50 mt-4 border border-dark border-bottom-0 border-start-0 border-end-0 border-3" /><span className="h3 text-dark px-2" style={{marginTop:'4px'}}>OR</span><span className="w-50 mt-4 border border-dark border-bottom-0 border-start-0 border-end-0 border-3" /> 
</div>
<div className='d-flex justify-content-center mt-4 '>
<NavLink to="/user_inscription"   className="btn btn-success btn-block  text-center text-nowrap" style={{width:'250px',height:'50px',fontSize:'23px'}}    id="create_account"><span className="position-relative me-2" style={{bottom:'2.5px'}}><AiFillPlusCircle/></span>Create account</NavLink>

</div>
</form>
          
         </div>
       </div>
      </div>   
   )
  
}

export default Connexion
