import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Nav_Admin from '../Home_Admin/Nav_Admin';
import {AiOutlineFieldNumber,AiFillDelete} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {FaRegUserCircle} from 'react-icons/fa'
import {IoCalendarNumber} from 'react-icons/io5'
import Compteur from './Picture/Compteur.png'
import Porte from './Picture/Porte.png'
import Gazoile from './Picture/Gazoile.png'
import Boite from './Picture/Boite.png'
import './Commande.css'
function Commande() {
    
    var username=getCookie('Username_admin');
    let history = useNavigate();

    useEffect(()=>{if(document.cookie.length ===0){
      history('/login');
        }},[]) 
    function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
 const [commande,setcommande]=useState([]);
 const [cars,setcars]=useState([]);
 const [users,setusers]=useState([]);
 const getuser=()=>{
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
    getuser();
  },[])
 const getData=()=>{
      fetch('http://localhost/Projet%20IHM/Commande/show_all_commande.php'
        ) .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setcommande(myJson)
        });
    }
    const getCar=()=>{
      fetch('http://localhost/Projet%20IHM/Cars/Show_car.php'
      
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setcars(myJson)
        });
    }

    var i=0;
    let allObject = commande.filter((val) => {
      // checking the type of elements using the typeof operator.
      if ( typeof val == 'object' ) {
         i++;
      } 
  });
    const drop_commande=(id_cmd)=>{
      let ft =new FormData();
      ft.append('id',id_cmd);
      fetch('http://localhost/Projet%20IHM/Commande/delete_coomande_by_id.php', {
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


         
    window.location.reload();
       }


    useEffect(()=>{getData();getCar(); },[])
    console.log(commande);
    return (
        <div className="background">
   <Nav_Admin username={username}  />
   
   <div className='d-flex justify-content-center mb-2 mt-5' style={{marginTop:'-28px'}}> <span className='h3  ms-1'>There is <span className="badge bg-danger bg-gradient rounded-5 mx-1">{i}</span> Commandes <span className="position-relative  mt-1" style={{marginRight:'4px'}}><FiShoppingCart size={40}/></span></span></div>

   <div className="row  row-cols-3"> {commande.map((elements,index)=>{ return(<>
{cars.map((car,index)=>{
if(elements.Id_car===car.Id_car){
    return(
          <div key={index} className="d-flex justify-content-center mt-5">
    <div className="card card_width">

    <div className="card-header ">
  <div className=" position-relative" style={{fontSize: "19px",right:'77px'}} >
    <span  className='position-relative' style={{top:'5px',right:'19px'}}> <AiOutlineFieldNumber size={22} /><span className='position-relative ' style={{top:'2.5px',right:'4.5px'}}> Commande: {elements.Id_commande}</span></span>
  <br/>

  <span className='position-relative' style={{top:'13px'}} ><IoCalendarNumber /><span className='position-relative ms-1' style={{top:'2.5px'}}>Date de commande: {elements.Date_Commande.substr(0,10)}</span></span>
  <br/>
  </div>
  <br/>
        </div>  
<div className='card-body'>
<div className=" h4   d-flex justify-content-end position-relative" >{car.price} DT</div>

<div className="ms-5 position-relative" style={{right:'20px',top:'60px'}}>
    
<img src={'http://localhost/Projet%20IHM/Cars/'+car.url}  width='400' height='210'/>
</div>
<br/>
<div className="text-center">
<div className="h3 mt-5 text-nowrap text-uppercase">{car.Marque}</div>
<div className="h5  mt-3">{car.Modele}</div>


</div>

<br/>
<div className="f-flex justify-content-between  ms-5 text-nowrap">
<div className="  text-nowrap">
<span className="border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{left:'4px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'50px',right:'45px'}}>0 KM</span>

<span>{(car.Boite==="Automatique")?<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{left:'7px'}}><img src={Boite}  width='40' height='30' /></span>:<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{right:'3px'}}><img src={Boite}  width='40' height='30' /></span>}
<span className='position-relative fw-bold' style={{top:'50px',right:'65px'}}>{car.Boite}</span></span>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark"><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'50px',right:'52px'}}>{car.Energie}</span>
</span>
<span className='position-relative' style={{right:'60px'}}>
<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark"><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'50px',right:'57px'}}>{car.Nombre_porte} portes</span>
</span>
</div>
<br/>
<br/>

<div className="d-flex justify-content-center mt-3 me-4">
<button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal1" class="btn btn-danger" style={{fontSize:"16px"}}  ><AiFillDelete  className="mb-2 me-1"/>Delete this Commande</button>
</div>


</div>
</div>
<div className="card-footer"> 
{users.map((user,index)=>{
if(elements.Id_user===user.Id_user){
    return(
<>
<div>{(user.url===`images/${user.Id_user}/`)?<FaRegUserCircle  size={40}  className='ms-4 position-relative  ' style={{right:'15px'}}/>:<img src={'http://localhost/Projet%20IHM/User/'+user.url} width='40' height='40'  className='ms-4 position-relative rounded-5 ' style={{right:'15px'}}/>}
</div>
      <div >ID: {user.Id_user}</div>
      <div >Nom: {user.Nom}</div>
      <div>Prénom: {user.Prenom}</div>
      <div>E-mail: {user.Email}</div>
      <dic>Adresse: {user.Adresse}</dic>
      <div>N°Tel: {user.tel}</div>
      <div>N°Cin: {user.Cin}</div>
      <div>Sexe: {user.Sexe}</div>
      <div>Date nissance: {user.Datenissance}</div>



</>
        
    )
    
    
    
    
    
    
    }
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="  mt-3"  style={{fontSize:'20px'}} id="exampleModalLabel">Are you Sure To Delete this Command </h1>
          <button type="button" class="btn-close mt-1" style={{fontSize:'15px'}}  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        
        <div class=" d-flex justify-content-center mt-5 mb-5">
        <button type="button" style={{fontSize:'18px'}}  onClick={()=>drop_commande(elements.Id_commande)} class="btn btn-primary ms-2">Yes</button>
          <button type="button" style={{fontSize:'18px'}}  class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    })};
</div>



</div>

</div>







     

   
       

   
)

}

})}
        

</>  )  
     

})}
       

    </div> 
    
 
    </div>
    
    
      
        
      )
}

export default Commande

