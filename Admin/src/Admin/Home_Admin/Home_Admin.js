import React from 'react'
import {useState,useEffect} from 'react';
import {FaCar}  from 'react-icons/fa';
import {FiUser,FiShoppingCart,FiSettings}  from 'react-icons/fi';
import './Home_Admin.css';
import './Nav_Admin'
import Card from './Card'
import { useNavigate } from 'react-router-dom'


import Nav_Admin from './Nav_Admin';
function Home_Admin() {
  let history = useNavigate();
var username;
    const [numberusers,setnumberusers]=useState([]);
    const [numbercommande,setnumbercommande]=useState([]);
    const [admin,setadmin]=useState([]);
    const [car,setcar]=useState([]);
    const [commandidcar,setcommande_id_car]=useState([]);
    function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
    username=getCookie('Username_admin');

 useEffect(()=>{if(document.cookie.length ===0){
  history('/login');
    }},[]) 



    const getusers=()=>{
        fetch('http://localhost/Projet%20IHM/User/number_user.php'
        
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setnumberusers(myJson)
          });
      }
      useEffect(()=>{
        getusers();
        getcars();
        getDatabyID();
        getcommande();
        commande_id_car();
        chiffre();
      },[])
      var i=0;
      numberusers.map((elements,index) => { i=elements.n;}) ;
    const [numbercars,setnumbercars]=useState([]);

    const getcars=()=>{
        fetch('http://localhost/Projet%20IHM/Cars/number_cars.php'
        
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setnumbercars(myJson)
          });
      }
      
      var j=0;
      numbercars.map((elements,index) => { j=elements.n;}) ;
    const getcommande=()=>{
        fetch('http://localhost/Projet%20IHM/Commande/show_number_commande.php'
        
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setnumbercommande(myJson)
          });
      }
      var somme=0;
const chiffre=async()=>{
  commandidcar.map((e,index)=>{
     car.map((cars,indexe)=>{
    if(e.Id_car===cars.Id_car){
somme+=+cars.price.replaceAll(' ', '')  ;  }
    
    
    } )           
              })


}
chiffre();
function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
somme=numberWithSpaces(somme);
console.log(somme);
    const commande_id_car=()=>{
        fetch('http://localhost/Projet%20IHM/Commande/chiffre_affaire.php'
        
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setcommande_id_car(myJson)
          });
      }
    

      const getDatabyID=()=>{
  
        fetch('http://localhost/Projet%20IHM/Cars/Show_car.php')
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            
            setcar(myJson)

          });
      };
      
      var k=0;
      numbercommande.map((elements,index) => { k=elements.n;}) ;

      var admin_Nom;
      var admin_Prenom;
      admin.map((elements,index) => { admin_Nom=elements.Nom;admin_Prenom=elements.Prenom}) ;


     

  return (
    <div>
          <div className="background ">
            
           
<Nav_Admin username={username}  />
<div className=" d-flex justify-content-center mt-5">
<div className=" row ms-3 " >
    <span className=" col-xl-4  col-md-6 col-sm-6  "><Card picture={<FiUser  size={30} />} name="Users" description="You can Show or Delete Users" link='/users' number={i} /></span>
    <span className=" col-xl-4  col-md-6 col-sm-6"><Card picture={<FaCar  size={30} />} name="Cars"  description="You can Add Show or Delete Cars" link='/cars' number={j}/></span>
    <span className=" col-xl-4  col-md-6 col-sm-6 "><Card picture={<FiShoppingCart  size={30} />} name="Commande"  description="You can Show or Delete Commande" link='/commandes' number={k} /></span>
    <span className=" col-xl-4 col-md-6 col-sm-6"><Card picture={<FiSettings  size={30} />} name="Setting" description="You can Set Setting" link='/setting'/></span>
</div>

</div>
<br/>
<div className="d-flex justify-content-center mt-5 ms-5">
<div className="card bg-secondary">
<div className="card-header">

 <span className="h3 text-white"> La somme de vente des commande : {somme} DT</span>
</div>

</div>
</div>
</div>
    </div>
  )
}

export default Home_Admin
