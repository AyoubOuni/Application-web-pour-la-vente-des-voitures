import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Nav_user from './../Nav_user/Nav_user'
import {BsBagPlusFill}  from 'react-icons/bs';

import { v4 as uuid } from 'uuid';


export default function Show_car(props) {
    var id_commande;
const id_uuid=uuid();
id_commande=id_uuid.substr(24);
    let { id } = useParams();
    let history = useNavigate();
    function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
    var username=getCookie('Username');
    var id_user=getCookie('id');
    var photo=getCookie('photo');
    const [Car,setcar]=useState([]);
    useEffect(()=>{if(document.cookie.length ===0){
      history('/user_login');
        }},[]) 

  const buy_car=()=>{
    let commande =new FormData();

    commande.append('id',id_commande);
    commande.append('id_car',id);
    commande.append('id_user',id_user);

fetch("http://localhost/Projet%20IHM/Commande/add_commande.php", {
      method: "POST",
      body: commande,
    })
      .then((result) => {
        if (result.status != 200) {
          throw new Error("Bad Server Response");
        }
        return result.text();
      })

      // (D) SERVER RESPONSE
      .then((response) => {
        console.log(response);
      })

      // (E) HANDLE ERRORS - OPTIONAL
      .catch((error) => {
        console.log(error);
      });
      window.location.reload();

  };


  
    
         const getDatabyID=()=>{
          let ft =new FormData();
          ft.append('id',id);
          console.log(id);
          fetch('http://localhost/Projet%20IHM/Cars/Show_car_by_ID.php', {
            method: 'POST',
            body: ft
        })
            .then(function(response){
              return response.json();
            })
            .then(function(myJson) {
              console.log(myJson);
              
              setcar(myJson)
  
            });
        };
         
        useEffect(()=>{getDatabyID();},[])
       
   
 return(
  Car.map((elements,index) => {    
  if (elements.Id_car===id){
    return(
<><Nav_user  username={username} photo={photo} id={id_user}/>

      <div key={elements.Id_car} className="d-flex justify-content-center mt-5">   
       <span  className="col-sm-5 ">
        <div  className="card  border border-3 border-dark ">
            <div  className="card-header h2 text-center text-white">
         <img src={'http://localhost/Projet%20IHM/Cars/'+elements.url}  width="500" height="300"/></div>
            <div  className="card-body  text-center  text-nowrap  bg-info "style={{fontSize:'23px'}} >
           
           Marque:  <span className="  text-uppercase">{elements.Marque}</span>
            <br />
            <br />
            Modele: {elements.Modele}
            <br />
            <br />
           Année: {elements.Annee}
           <br />
            <br />
            Prix: {elements.price} DT
            <br />
            <br />
            Energie: {elements.Energie}
            <br />
            <br />
            Boite: {elements.Boite}
            <br />
            <br />
            Puissance Fiscale: {elements.Puissance} CV
            <br />
            <br />
            Nombre de portes: {elements.Nombre_porte}
            <br />
            <br />
            <button type="button" class=" btn btn-secondary ms-3 px-4 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal1" ><span className='h2'><span className='position-relative' style={{bottom: '3px'}}><BsBagPlusFill/></span> Ajouter au panier</span></button>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class=" h2 mt-1" id="exampleModalLabel">Are you Sure To Buy this Car </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
      <div class=" d-flex justify-content-center mt-5 mb-5">
      <button type="button" class="btn btn-primary ms-2 " onClick={buy_car} style={{fontSize:"18px"}}>Yes</button>
        <button type="button" class="btn btn-secondary ms-2 " style={{fontSize:"18px"}} data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
           </div>
           </div>
           </span>
           </div>
           </>
)}}
  
  )
 )}
