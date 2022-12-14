import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Nav_Admin from './../Home_Admin/Nav_Admin'
import {  useSelector } from 'react-redux'

export default function Show_car(props) {
    let { id } = useParams();
    let history = useNavigate();
    function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
    var username=getCookie('Username_admin');
    const [Car,setcar]=useState([]);
    const [numbercommande,setnumbercommande]=useState([]);
    const [Cars,setcars]=useState({marque:"",modele:"",annee:"",energie:"",prix:"",boite:"",puissance:"",nombreportes:"",photo:"",ancienne_photo:""});
    useEffect(()=>{if(document.cookie.length ===0){
      history('/login');
        }},[]) 
  const copy=()=>{
     Car.map((elements,index) => {setcars({...Cars,marque:elements.Marque,modele:elements.Modele,annee:elements.Annee,energie:elements.Energie,prix:elements.price,boite:elements.Boite,puissance:elements.Puissance,nombreportes:elements.Nombre_porte,photo:elements.url,ancienne_photo:elements.url})
  }); 
  }
  
    const supprimer_car=(id_car)=>{
        let ft =new FormData();
        ft.append('id',id_car);
        fetch('http://localhost/Projet%20IHM/Cars/Delete_car.php', {
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


      history('/cars');
      window.location.reload();


         }
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
         const numbercommandethiscar=()=>{
          let ft =new FormData();
          ft.append('id',id);
          console.log(id);
          fetch('http://localhost/Projet%20IHM/Commande/nombre_commande_this_car.php', {
            method: 'POST',
            body: ft
        })
            .then(function(response){
              return response.json();
            })
            .then(function(myJson) {
              console.log(myJson);
              
              setnumbercommande(myJson)
  
            });
        };
         const update_car=()=>{
          let car =new FormData();

          console.log(Cars);    
          car.append('marque',Cars.marque);
          car.append('id',id);
          car.append('modele',Cars.modele);
          car.append('annee',Cars.annee);
          car.append('energie',Cars.energie);
          car.append('prix',Cars.prix);
          car.append('boite',Cars.boite);
          car.append('puissance',Cars.puissance);
          car.append('nombreportes',Cars.nombreportes);
          car.append('photo',Cars.photo);
          car.append('photo_ancienne',Cars.ancienne_photo);
          fetch('http://localhost/Projet%20IHM/Cars/Update_car.php', {
            method: 'POST',
            body: car
        })
        .then((result) => {
          if (result.status != 200) { throw new Error("Bad Server Response"); }
          return result.text();
          })
          
          // (D) SERVER RESPONSE
          .then((response) => {
          console.log(response);
          
          
          
          
          })
          
          // (E) HANDLE ERRORS - OPTIONAL
          .catch((error) => { console.log(error); });
          
          window.location.reload();

        }          
        useEffect(()=>{getDatabyID();numbercommandethiscar();},[])
       
        var j=0;
        numbercommande.map((elements,index) => { j=elements.n;}) ;
 return(
  Car.map((elements,index) => {    
  if (elements.Id_car===id){
    return(
<><Nav_Admin  username={username} />
      <div key={elements.Id_car} className="d-flex justify-content-center mt-5">   
       <span  className="col-sm-5 ">
        <div  className="card  border border-3 border-dark ">
            <div  className="card-header h2 text-center text-white">
         <img src={'http://localhost/Projet%20IHM/Cars/'+elements.url}  width="500" height="300"/></div>
            <div  className="card-body  text-center  text-nowrap  bg-info "style={{fontSize:'23px'}} >
            ID :   {elements.Id_car}
            <br />
            <br />
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
            Date de creation: {elements.DateInscription}
            <br />
            <br />
            Nombre des vues: {elements.nombre_vue}
            <br />
            <br />
            Nombre des commandes: {j}
            <br />
            <br />
            <button type="button" class="w-25 btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1"><span className='h5'> Delete</span></button>
            <button type="button" onClick={copy} class="w-25 btn btn-secondary ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" ><span className='h5'> Update</span></button>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class=" fs-5 mt-1" id="exampleModalLabel">Are you Sure To Delete this Car </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
      <div class=" d-flex justify-content-center mt-4 mb-3">
      <button type="button" onClick={() =>supprimer_car(id)} class="btn btn-primary ms-2">Yes</button>
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
        <h1 class="modal-title fs-2 text-center " id="exampleModalLabel">Update this Car</h1></div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form autoComplete='off' required>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Marque:</label>
            <input type="text" value={Cars.marque} onChange={(e)=>{setcars({ ...Cars,marque:e.target.value});}} placeholder="Entrer le Marque de voiture à ajouter" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Modele:</label>
            <input type="text" value={Cars.modele}  onChange={(e)=>{setcars({ ...Cars,modele:e.target.value});}} placeholder="Entrer le Modele de voiture à ajouter" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Année:</label>
            <input type="text" value={Cars.annee} onChange={(e)=>{setcars({ ...Cars,annee:e.target.value});}} placeholder="Entrer l'année de fabrication de voiture à ajouter" class="form-control" id="recipient-annee" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Energie :</label>
            <select  value={Cars.energie} onChange={(e)=>{setcars({ ...Cars,energie:e.target.value});}} class="form-select" aria-label="Default select example">
  <option selected>Select the type of Energie</option>
  <option value="Essence">Essence</option>
  <option value="Diesel">Diesel</option>
  <option value="Electrique">Electrique</option>
  <option value="Gaz">Gaz</option>
</select>          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Boîte de vitesse:</label>
            <select value={Cars.boite} onChange={(e)=>{setcars({ ...Cars,boite:e.target.value});}} class="form-select" aria-label="Default select example">
  <option value="" selected>Select le type de Boîte de vitesse</option>
  <option value="Automatique">Automatique</option>
  <option value="Manuelle">Manuelle</option>
</select>             </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Puissance fiscale:</label>
            <input value={Cars.puissance} onChange={(e)=>{setcars({ ...Cars,puissance:e.target.value});}} type="text" placeholder="Entrer la Puissance fiscale de voiture à ajouter" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="h4">Prix:</label>
            <input value={Cars.prix}  onChange={(e)=>{setcars({ ...Cars,prix:e.target.value});}} type="text" placeholder="Entrer le prix de voiture à ajouter" class="form-control" id="recipient-name" />
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="h4">Nombre de portes:</label>
            <select value={Cars.nombreportes} onChange={(e)=>{setcars({ ...Cars,nombreportes:e.target.value});}} class="form-select" aria-label="Default select example">
  <option selected>Select le Nombre de portes</option>
  <option value="2">2 Portes</option>
  <option value="3">3 Portes</option>
  <option value="4">4 Portes</option>
  <option value="5">5 Portes</option>
</select>              </div>
<div class="mb-3">
            <label for="recipient-name" class="h4">Photo:</label>
            <input onChange={(e)=>{setcars({ ...Cars,photo:e.target.files[0]});}} type="file" class="form-control" id="recipient-name" accept="image/*" />
          </div>
        
        </form>
      </div>
      <hr/>
      <div class="d-flex justify-content-center">

      <div class="mt-2 mb-4  ">
      <button type="button" class="btn btn-primary " onClick={update_car} >Valider</button>
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
           </>
)}}
  
  )
 )}
