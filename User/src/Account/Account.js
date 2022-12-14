import React,{useEffect,useState} from 'react'
import Nav_user from './../Nav_user/Nav_user'
import { useNavigate } from 'react-router-dom'
import {FaRegUserCircle}  from 'react-icons/fa';
import {RxUpdate}  from 'react-icons/rx';
import {MdManageAccounts}  from 'react-icons/md';



function Setting() {
    
        const [User,setuser]=useState([]);
        const [CurrentUser,setCurrentUser]=useState({Id:"",Nom:"",Prenom:"",Email:"",Password:"",Adresse:"",Cin:"",tel:"",Sexe:"",ancienne_photo:"",photo:"",Datenissance:""});

         const update_admin=async()=>{

          let user_set =new FormData();
          user_set.append('id',CurrentUser.Id);
          user_set.append('nom',CurrentUser.Nom);
          user_set.append('prenom',CurrentUser.Prenom);
          user_set.append('email',CurrentUser.Email);
          user_set.append('password',CurrentUser.Password);
          user_set.append('adresse',CurrentUser.Adresse);
          user_set.append('cin',CurrentUser.Cin);
          user_set.append('tel',CurrentUser.tel);
          user_set.append('datenissance',CurrentUser.Datenissance);
          user_set.append('photo',CurrentUser.photo);
          user_set.append('sexe',CurrentUser.Sexe);
          user_set.append('photo_ancienne',CurrentUser.ancienne_photo);

          fetch('http://localhost/Projet%20IHM/User/Update_User_By_ID.php', {
            method: 'POST',
            body: user_set
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
        useEffect(() => {
            setTimeout(() => {
              uploade();
            }, 2);
          });
        const uploade=async ()=>{
            document.cookie = `photo=${User[0].url}`;
            document.cookie = `Username=${User[0].Prenom+' '+User[0].Nom}`;
        }
        let history = useNavigate();
        function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
        var username=getCookie('Username');
        var id_user=getCookie('id');
        var photo=getCookie('photo');
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
                    
           useEffect(()=>{getuserDetails();          
           },[])
           const getuserDetails=async()=>{
                let ft =new FormData();
               await ft.append('id',id_user);
               await fetch('http://localhost/Projet%20IHM/User/Get_user_by_id.php', {
                  method: 'POST',
                  body: ft
              })
                  .then(function(response){
                    return response.json();
                  })
                  .then(function(myJson) {
                    console.log(myJson);
                    setuser(myJson);
                    
        
                  });
              }
              var check1= document.getElementById('flexRadioDefault1')  ;   
              var check2= document.getElementById('flexRadioDefault2')  ; 
              const checking=()=>{
                if (CurrentUser.Sexe=="Homme")  {
                        check1.checked=true;
                       }
                       else if(CurrentUser.Sexe=="Femme") {
        
                        check2.checked=true;
        
                       }
              }
              
              const copy=async ()=>{
               await User.map((elements) => {setCurrentUser({...CurrentUser,Id:elements.Id_user,Nom:elements.Nom,Prenom:elements.Prenom,Email:elements.Email,Cin:elements.Cin,tel:elements.tel,Adresse:elements.Adresse,Sexe:elements.Sexe,Datenissance:elements.Datenissance,Password:elements.Password,photo:elements.url,ancienne_photo:elements.url})

              
        }); 
        await checking();

             }

            


  return (
  

        User.map((elements) => {    

    return(
<>        <div className="background">
<Nav_user username={User[0].Prenom+' '+User[0].Nom} photo={User[0].url} id={id_user} />
<div className='d-flex justify-content-center mb-5 ' style={{marginTop:'-28px'}}> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><MdManageAccounts size={40}/></span><span className='h1 mt-2 ms-1'>Account</span></div>

      <div key={elements.Id_user} className="d-flex justify-content-center mt-5">   
       <span  className="col-sm-5 ">
        <div  className="card  border border-3 border-dark " >
            <div  className="card-header  text-center text-dark">{(photo===`images/${id_user}/`)?<FaRegUserCircle  size={120}  className='ms-4 position-relative  ' style={{top:'-7px'}}/>:<img src={'http://localhost/Projet%20IHM/User/'+User[0].url} width='370' height='370'  className='  position-relative  ' />}
     </div>
          <div  className="card-body  text-center  text-nowrap  bg-info " style={{fontSize:'21px'}} >
           
            Nom: {elements.Nom}
            <br />
            <br />
           Prenom: {elements.Prenom}
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

            <button type="button" onClick={copy} class=" btn btn-secondary ms-3 px-4 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal1" ><span className='h2'><span className='position-relative' style={{bottom: '3px'}}><RxUpdate/></span> Update</span></button>





<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <br/>
        <div className='d-flex justify-content-center'>
        <div class="modal-title text-center  "  style={{fontSize:'30px'}} id="exampleModalLabel">Update Your Profile</div></div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form autoComplete='off' required>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Nom :</label>
            <input  style={{fontSize:'20px'}} type="text" value={CurrentUser.Nom} onChange={(e)=>{setCurrentUser({ ...CurrentUser,Nom:e.target.value});}} placeholder="Entrer Votre Nom" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Prenom:</label>
            <input  style={{fontSize:'20px'}} type="text" value={CurrentUser.Prenom} onChange={(e)=>{setCurrentUser({ ...CurrentUser,Prenom:e.target.value});}} placeholder="Entrer Votre Prenom" class="form-control" id="prénom" />
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="h2">Email :</label>
            <input style={{fontSize:'20px'}} value={CurrentUser.Email}onChange={(e)=>{setCurrentUser({ ...CurrentUser,Email:e.target.value});}} placeholder="Entrer Votre Email" class="form-control" id="email" />
         </div>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Cin:</label>
            <input  style={{fontSize:'20px'}}  value={CurrentUser.Cin} onChange={(e)=>{setCurrentUser({ ...CurrentUser,Cin:e.target.value});}} placeholder="Entrer Votre Cin" class="form-control" id="cin" />
          </div>
          <div class="mb-3 ">
            <label for="recipient-name" class="h2">Adresse:</label>
            <input  style={{fontSize:'20px'}} value={CurrentUser.Adresse} onChange={(e)=>{setCurrentUser({ ...CurrentUser,Adresse:e.target.value});}} type="text" placeholder="Entrer Votre Adresse" class="form-control" id="adresse" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Tel:</label>
            <input  style={{fontSize:'20px'}} value={CurrentUser.tel} onChange={(e)=>{setCurrentUser({ ...CurrentUser,tel:e.target.value});}} type="text" placeholder="Entrer  Votre N°Tel" class="form-control" id="tel" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Date de Nissance:</label>
            <input  style={{fontSize:'20px'}} value={CurrentUser.Datenissance}  onChange={(e)=>{setCurrentUser({ ...CurrentUser,Datenissance:e.target.value});}} type="date"  class="form-control" id="date" />
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="h2">Sexe:</label>
            <div className="row " style={{marginLeft:'130px'}}>
      <div class="form-check col-sm-2 ms-4 me-3">
  <input class="form-check-input h2" type="radio" name="sexe" value="Homme"   onChange={(e)=>{setCurrentUser({ ...CurrentUser,Sexe:e.target.value});}} id="flexRadioDefault1" />
  <label class="form-check-label h3" for="flexRadioDefault1">Homme</label>
</div>
<div class="form-check col-sm-2  "style={{marginLeft:'50px'}}>
  <input class="form-check-input" type="radio" value="Femme" name="sexe" onChange={(e)=>{setCurrentUser({ ...CurrentUser,Sexe:e.target.value});}} id="flexRadioDefault2"  />
  <label class="form-check-label h3" for="flexRadioDefault2">Femme </label>
</div>
        </div>
        </div>
<div class="mb-3">
            <label for="recipient-name" class="h2">Password:</label>
            <input  style={{fontSize:'20px'}} value={CurrentUser.Password} onChange={(e)=>{setCurrentUser({ ...CurrentUser,Password:e.target.value});}} type="password" placeholder="Entrer Votre Password" class="form-control" id="password" />
           <div className="d-flex justify-content-start ms-1 mt-3"><input onClick={showpassword} type="checkbox" className="me-2 form-check-input"/><label>Show password</label></div>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h2">Photo:</label>
            <input  style={{fontSize:'20px'}}  onChange={(e)=>{setCurrentUser({ ...CurrentUser,photo:e.target.files[0]});}} type="file" class="form-control" id="recipient-name" accept="image/*" />
          </div>
        
        </form>
      </div>
      <hr/>
      <div class="d-flex justify-content-center">

      <div class="mt-2 mb-4  ">
      <button type="button" class="btn btn-primary " style={{fontSize:'18px'}} onClick={update_admin}  >Valider</button>
        <button type="button" class="btn btn-secondary ms-3" style={{fontSize:'18px'}} data-bs-dismiss="modal">Close</button>
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
