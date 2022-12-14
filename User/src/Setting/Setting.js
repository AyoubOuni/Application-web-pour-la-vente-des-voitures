import React,{useEffect,useState} from 'react'
import Nav_Admin from './../Admin/Home_Admin/Nav_Admin'
import icon from './icon.png'
import {FaUserTie}  from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'



function Setting() {
        const [Admin,setadmin]=useState([]);
        const [CurrentAdmin,setCurrentAdmin]=useState({Id:"",Nom:"",Prenom:"",Email:"",Password:"",Adresse:"",Cin:"",tel:"",Sexe:"",Username:"",Datenissance:""});

         const update_admin=()=>{
          let admin_set =new FormData();

          admin_set.append('id',CurrentAdmin.Id);
          admin_set.append('nom',CurrentAdmin.Nom);
          admin_set.append('prenom',CurrentAdmin.Prenom);
          admin_set.append('email',CurrentAdmin.Email);
          admin_set.append('password',CurrentAdmin.Password);
          admin_set.append('adresse',CurrentAdmin.Adresse);
          admin_set.append('cin',CurrentAdmin.Cin);
          admin_set.append('tel',CurrentAdmin.tel);
          admin_set.append('datenissance',CurrentAdmin.Datenissance);
          admin_set.append('username',CurrentAdmin.Username);
          admin_set.append('sexe',CurrentAdmin.Sexe);
          
          fetch('http://localhost/Projet%20IHM/Admin/Update_Admin.php', {
            method: 'POST',
            body: admin_set
        })
        .then((result) => {
          if (result.status != 200) { throw new Error("Bad Server Response"); }
          return result.text();
          })
          
          // (D) SERVER RESPONSE
          .then((response) => {
          
     
          
          
          })
          
          // (E) HANDLE ERRORS - OPTIONAL
          .catch((error) => { console.log(error); });
          window.location.reload();
          
        }          
        let history = useNavigate();
        function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
        var username=getCookie('Username');
        var id_admin=getCookie('id');
        useEffect(()=>{if(document.cookie.length ===0){
                history('/login');
                  }},[]) 
                  function showpassword() {
                        var x = document.getElementById("password");
                        if (x.type === "password") {
                          x.type = "text";
                        } else {
                          x.type = "password";
                        }
                      }
           useEffect(()=>{getadminDetails();},[])
           const getadminDetails=async()=>{
                let ft =new FormData();
               await ft.append('id',id_admin);
               await fetch('http://localhost/Projet%20IHM/Admin/Get_Admin_BY_ID.php', {
                  method: 'POST',
                  body: ft
              })
                  .then(function(response){
                    return response.json();
                  })
                  .then(function(myJson) {
                    console.log(myJson);
                    setadmin(myJson);
                    
        
                  });
              }
              var check1= document.getElementById('flexRadioDefault1')  ;   
              var check2= document.getElementById('flexRadioDefault2')  ; 
              const checking=()=>{
                if (CurrentAdmin.Sexe=="Homme")  {
                        check1.checked=true;
                       }
                       else if(CurrentAdmin.Sexe=="Femme") {
        
                        check2.checked=true;
        
                       }
              }
              
              const copy=async ()=>{
               await Admin.map((elements) => {setCurrentAdmin({...CurrentAdmin,Id:elements.Id,Nom:elements.Nom,Prenom:elements.Prenom,Email:elements.Email,Cin:elements.Cin,tel:elements.tel,Adresse:elements.Adresse,Sexe:elements.Sexe,Username:elements.Username,Datenissance:elements.Datenissance,Password:elements.Password})
              
              
        }); 
        await checking();
      
             }

              const supprimer_admin=()=>{
                let ft =new FormData();
                ft.append('id',id_admin);
                fetch('http://localhost/Projet%20IHM/Admin/Delete_Admin_BY_ID.php', {
                  method: 'POST',
                  body: ft
              })
              .then((result) => {
                if (result.status != 200) { throw new Error("Bad Server Response"); }
                return result.text();
              })
             
              // (D) SERVER RESPONSE
              .then((response) => {
             
                
                
                
              })
             
              // (E) HANDLE ERRORS - OPTIONAL
              .catch((error) => { console.log(error); });
        
        
              document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
              document.cookie = "Username=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
              history('/login');        
              window.location.reload();
                 }


  return (
  

        Admin.map((elements) => {    

    return(
<>        <div className="background">
<Nav_Admin  username={username} />
      <div key={elements.Id} className="d-flex justify-content-center mt-5">   
       <span  className="col-sm-5 ">
        <div  className="card  border border-3 border-dark ">
            <div  className="card-header  text-center text-dark">         <FaUserTie size={90} /></div>
          <div  className="card-body  text-center  text-nowrap  bg-info " style={{fontSize:'21px'}} >
            ID :   {elements.Id}
            <br />
            <br />
            Nom: {elements.Nom}
            <br />
            <br />
           Prenom: {elements.Prenom}
           <br />
            <br />
            Username: {elements.Username} 
            <br />
            <br />
            Email: {elements.Email}
            <br />
            <br />
            Cin: {elements.Cin} 
            <br />
            <br />
            Adresse: {elements.Adresse}
            <br />
            <br />
            Date de nissance: {elements.Datenissance}
            <br />
            <br />
            Sexe: {elements.Sexe}
            <br />
            <br />
            tel: {elements.tel}
            <br />
            <br />
            <button type="button" class="w-25 btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1"><span className='h5'> Delete</span></button>
            <button type="button" onClick={copy} class="w-25 btn btn-secondary ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" ><span className='h5'> Update</span></button>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class=" fs-5 mt-1" id="exampleModalLabel">Are you Sure To Delete Your Admin Account </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
      <div class=" d-flex justify-content-center mt-4 mb-3">
      <button type="button" onClick={() =>supprimer_admin()} class="btn btn-primary ms-2">Yes</button>
        <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <br/>
        <div className='d-flex justify-content-center'>
        <h1 class="modal-title fs-2 text-center " id="exampleModalLabel">Update Admin</h1></div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form autoComplete='off' required>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Nom :</label>
            <input type="text" value={CurrentAdmin.Nom} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Nom:e.target.value});}} placeholder="Entrer Votre Nom" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Prenom:</label>
            <input type="text" value={CurrentAdmin.Prenom} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Prenom:e.target.value});}} placeholder="Entrer Votre Prenom" class="form-control" id="prenom" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Username:</label>
            <input type="text" value={CurrentAdmin.Username} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Username:e.target.value});}} placeholder="Entrer Votre Username" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Email :</label>
            <input  value={CurrentAdmin.Email}onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Email:e.target.value});}} placeholder="Entrer Votre Email" class="form-control" id="email" />
         </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Cin:</label>
            <input  value={CurrentAdmin.Cin} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Cin:e.target.value});}} placeholder="Entrer Votre Cin" class="form-control" id="cin" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Adresse:</label>
            <input value={CurrentAdmin.Adresse} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Adresse:e.target.value});}} type="text" placeholder="Entrer Votre Adresse" class="form-control" id="adresse" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Tel:</label>
            <input value={CurrentAdmin.tel} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,tel:e.target.value});}} type="text" placeholder="Entrer  Votre N°Tel" class="form-control" id="tel" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Date de Nissance:</label>
            <input value={CurrentAdmin.Datenissance}  onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Datenissance:e.target.value});}} type="date"  class="form-control" id="date" />
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="h4">Sexe:</label>
            <div className="row " style={{marginLeft:'100px'}}>
      <div class="form-check col-sm-2 ms-4 me-3">
  <input class="form-check-input" type="radio" name="sexe" value="Homme"   onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Sexe:e.target.value});}} id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">Homme</label>
</div>
<div class="form-check col-sm-2 ms-5 ">
  <input class="form-check-input" type="radio" value="Femme" name="sexe" onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Sexe:e.target.value});}} id="flexRadioDefault2"  />
  <label class="form-check-label" for="flexRadioDefault2">Femme </label>
</div>
        </div>
        </div>
<div class="mb-3">
            <label for="recipient-name" class="h4">Password:</label>
            <input value={CurrentAdmin.Password} onChange={(e)=>{setCurrentAdmin({ ...CurrentAdmin,Password:e.target.value});}} type="password" placeholder="Entrer Votre Password" class="form-control" id="password" />
           <div className="d-flex justify-content-start ms-1 mt-3"><input onClick={showpassword} type="checkbox" className="me-2 form-check-input"/><label>Show password</label></div>
          </div>
        
        </form>
      </div>
      <hr/>
      <div class="d-flex justify-content-center">

      <div class="mt-2 mb-4  ">
      <button type="button" class="btn btn-primary " onClick={update_admin}  >Valider</button>
        <button type="button" class="btn btn-secondary ms-3" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
  </div>
</div>
           </div>
           </div>
           </span>
           </div>
           </div>
           </>
)}
  
  )
 )}

    
export default Setting
