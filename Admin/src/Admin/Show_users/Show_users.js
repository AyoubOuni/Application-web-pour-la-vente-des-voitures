import React,{useState,useEffect} from 'react'
import {ImUser}  from 'react-icons/im';
import {FaRegUserCircle}  from 'react-icons/fa';
import Nav_Admin from '../Home_Admin/Nav_Admin';
import {  useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

import './Show_users.css'
import { useNavigate } from 'react-router-dom'
export default function Show_users() {
  let { id } = useParams();
  function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
 var username=getCookie('Username_admin');
  console.log(id);
  let history = useNavigate();
  var id_spp;
  const copy=(id1)=>{
    id_spp=id1;
  }
  useEffect(()=>{if(document.cookie.length ===0){
    history('/login');
      }},[]) 
    const [users,setusers]=useState([]);
      // DELETE request using axios with async/await
      const supprimer_user=(iduser)=>{
      let ft =new FormData();
      ft.append('id',iduser);
      fetch('http://localhost/Projet%20IHM/User/Delete_user.php', {
        method: 'POST',
        body: ft
    })
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
   
    // (D) SERVER RESPONSE
    .then((response) => {
      console.log(response);
      console.log(response.status);
  
      
      
      
    })
   
    // (E) HANDLE ERRORS - OPTIONAL
    .catch((error) => { console.log(error); });
  
       
    window.location.reload();

       }

  
  
    const getData=()=>{
      fetch('http://localhost/Projet%20IHM/User/Show_user.php'
      
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setusers(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    var i=0;

    let allObject = users.filter((val) => {
        // checking the type of elements using the typeof operator.
        if ( typeof val == 'object' ) {
           i++;
        } 
    });

    
     
    if (users.length===0) return(<><Nav_Admin username={username} /><div style={{color:"red"}} className=" h1 fw-bolder    text-center background"><span className="margin_top">There is no Users</span></div></>)
else{
return(
    <div className="background ">
      <Nav_Admin username={username} />
      <div className='d-flex justify-content-center mb-2 mt-5' style={{marginTop:'-28px'}}> <span className='h3  ms-1'>There is <span className="badge bg-danger bg-gradient rounded-5 mx-1">{i}</span> Users <span className="position-relative  " style={{marginRight:'4px',bottom:'6px'}}><ImUser size={33}/></span></span></div>
   <div className=' ms-5  my-5 me-5' >
    <table className=" table table-bordered border-dark  auto"  >
  <thead className="table-white bg-primary bg-gradient border-dark text-center ">
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Picture</th>
    <th scope="col">Nom</th>
    <th scope="col">Prènom</th>
    <th scope="col">Email</th>
    <th scope="col">Adresse</th>
    <th scope="col">N°Tel</th>
    <th scope="col">N°CIN</th>
    <th scope="col">Sexe</th>
    <th scope="col">Date de nissance</th>
    <th scope="col">Supprimer</th>
  </tr>
</thead>
 
 {users.map((elements,index) => { 
 
   
    return(
  <tbody key={elements.Id_user} className="text-center border-dark bg-light text-dark   text-nowrap">
    <tr>
      <th scope="row">{elements.Id_user}</th>
      <td>{(elements.url===`images/${elements.Id_user}/`)?<FaRegUserCircle  size={40}  className='ms-4 position-relative  ' style={{right:'15px'}}/>:<img src={'http://localhost/Projet%20IHM/User/'+elements.url} width='40' height='40'  className='ms-4 position-relative rounded-5 ' style={{right:'15px'}}/>}
</td>
      <td >{elements.Nom}</td>
      <td>{elements.Prenom}</td>
      <td>{elements.Email}</td>
      <td>{elements.Adresse}</td>
      <td>{elements.tel}</td>
      <td>{elements.Cin}</td>
      <td>{elements.Sexe}</td>
      <td>{elements.Datenissance}</td>
      <td><button type="button" className="btn-close" onClick={()=>copy(elements.Id_user)} data-bs-toggle="modal" data-bs-target="#exampleModal1"  ></button></td>
  
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class=" fs-5 mt-1" id="exampleModalLabel">Are you Sure To Delete this User </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
      <div class=" d-flex justify-content-center mt-4 mb-3">
      <button type="button" onClick={()=>supprimer_user(id_spp)} class="btn btn-primary ms-2">Yes</button>
        <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</tr>
  </tbody>
  
)})}
 
</table>
</div>
          
</div>

)
}
    }