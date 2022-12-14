import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Nav_user from './../Nav_user/Nav_user'
import {AiOutlineFieldNumber,AiFillDelete} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {IoCalendarNumber} from 'react-icons/io5'
import Compteur from './Picture/Compteur.png'
import Porte from './Picture/Porte.png'
import Gazoile from './Picture/Gazoile.png'
import Boite from './Picture/Boite.png'
function Commande() {
    
    var username=getCookie('Username');
    var photo=getCookie('photo');
    let history = useNavigate();

    useEffect(()=>{if(document.cookie.length ===0){
      history('/user_login');
        }},[]) 
        function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
 var id=getCookie('id');
 const [commande,setcommande]=useState([]);
 const [cars,setcars]=useState([]);

 const getData=()=>{
    let ft =new FormData();
    ft.append('id_user',id);
      fetch('http://localhost/Projet%20IHM/Commande/show_commande_user.php',{
      method: 'POST',
            body: ft
        })
      
        .then(function(response){
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
   <Nav_user username={username} photo={photo} id={id} />
   
   <div className='d-flex justify-content-center mb-5 ' style={{marginTop:'-28px'}}> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><FiShoppingCart size={40}/></span><span className='h1 mt-2 ms-1'>Commandes</span></div>

   <div className="row  row-cols-3"> {commande.map((elements,index)=>{   return(<>
{cars.map((car,index)=>{
if(elements.Id_car===car.Id_car){
return(
  <div key={index} className="d-flex justify-content-center mt-5 ">
    <div className="card " >
      <div className="card-header ">
  <div className=" h3 " >
    <span  className='position-relative' style={{top:'5px'}}> <AiOutlineFieldNumber size={22} /><span className='position-relative ' style={{top:'2.5px',right:'4.5px'}}> Commande: {elements.Id_commande}</span></span>
  <br/>

  <span className='position-relative' style={{top:'13px'}} ><IoCalendarNumber /><span className='position-relative ms-1' style={{top:'2.5px'}}>Date de commande: {elements.Date_Commande.substr(0,10)}</span></span>
  <br/>
  </div>
  <br/>
        </div>
          
        <div className="card-body ">
        <div className=" h2  mt-5 d-flex justify-content-end position-relative" style={{bottom:'25px'}}>{car.price} DT</div>

<div className="ms-5">
<img src={'http://localhost/Projet%20IHM/Cars/'+car.url}  width='400' height='210'/>
</div>
<div className="text-center">
<div className="h2 mt-3 text-nowrap text-uppercase">{car.Marque}</div>
<div className="h4  mt-3">{car.Modele}</div>
<br/>

</div>
<div className="f-flex justify-content-between  ms-5 text-nowrap">
<div className=" ms-5 text-nowrap">
{(car.Boite==="Automatique")? 
<div className=" position-relative " style={{left:'25px'}}>
    
    <span className="border border-3  px-2   text-dark border border-dark position-relative" style={{left:'4px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'41px',right:'38px'}}>0 KM</span>
{(car.Boite==="Automatique")?   <span className="position-relative" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span>
   <span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{car.Boite}</span></span>: <span className="position-relative me-4" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span><span className='position-relative fw-bold' style={{top:'40px',right:'38px'}}>{car.Boite}</span></span>}
<span className="position-relative" style={{left:'10px'}}>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 px-2  text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'46px'}}>{car.Energie}</span>
</span></span>
<span className='position-relative ms-1' style={{right:'45px'}}>
<span className="  border border-3  px-2 text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{car.Nombre_porte} portes</span>
</span>
</div>:<div >
    
    <span className="border border-3  px-2   text-dark border border-dark position-relative" style={{left:'4px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'41px',right:'38px'}}>0 KM</span>
{(car.Boite==="Automatique")?   <span className="position-relative" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span>
   <span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{car.Boite}</span></span>: <span className="position-relative me-4" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span><span className='position-relative fw-bold' style={{top:'40px',right:'38px'}}>{car.Boite}</span></span>}
<span className="position-relative" style={{left:'10px'}}>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 px-2  text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'46px'}}>{car.Energie}</span>
</span></span>
<span className='position-relative ms-1' style={{right:'45px'}}>
<span className="  border border-3  px-2 text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{car.Nombre_porte} portes</span>
</span>

</div>}

</div>
<br/>
<br/>
<div className="d-flex justify-content-center mt-3 me-4">
<button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal1" class="btn btn-danger" style={{fontSize:"16px"}}  ><AiFillDelete  className="mb-2 me-1"/>Delete this Commande</button>
</div>

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

      </div>
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

