import React,{useState,useEffect} from 'react'
import './Cars.css'
import { useNavigate } from 'react-router-dom'
import Add_cars from './Add_cars'
import Compteur from './Picture/Compteur.png'
import Nav_Admin from './../Home_Admin/Nav_Admin'
import Porte from './Picture/Porte.png'
import Gazoile from './Picture/Gazoile.png'
import Boite from './Picture/Boite.png'
import {AiOutlineFullscreen}  from 'react-icons/ai';
import {IoCarSportSharp}  from 'react-icons/io5';

function Cars() {
  let history = useNavigate();

  useEffect(()=>{if(document.cookie.length ===0){
    history('/login');
      }},[]) 
  function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
 var username=getCookie('Username_admin');
  
   
  const [cars,setcars]=useState([]);

  const getData=()=>{
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
    useEffect(()=>{getData();},[])
    const show=(id)=>{
      cars.map((elements,index)=>{ if (id===elements.Id_car){
    
      
    console.log(elements);
    history(`/cars/${id}`);
    
    
    }})};
    var i=0;
    let allObject = cars.filter((val) => {
      // checking the type of elements using the typeof operator.
      if ( typeof val == 'object' ) {
         i++;
      } 
  });
  return (
    <div className="background">
      <Nav_Admin username={username} />
      <div className='d-flex justify-content-center mb-2 mt-5' style={{marginTop:'-28px'}}> <span className='h3  ms-1'>There is <span className="badge bg-danger bg-gradient rounded-5 mx-1">{i}</span> Cars <span className="position-relative  mt-1" style={{marginRight:'4px'}}><IoCarSportSharp size={40}/></span></span></div>
            <div className="row  row-cols-3  "> {cars.map((elements,index)=>{return(  <div key={index} className="d-flex justify-content-center mt-5">
            <button className=" mt-1 ms-1 btn" onClick={() =>{show(elements.Id_car)}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" >  <div className=" card  width_card bg-light">
            <div className="card">

<div className="card-header " style={{height:'45px'}}>
  <div className=" d-flex justify-content-start " >
<AiOutlineFullscreen size={30}/></div>

  <div className=" h2   d-flex justify-content-end position-relative" style={{bottom:'35px'}}>{elements.price} DT</div>
  </div>      
<div className='card-body'>
<div className="ms-5 position-relative" style={{right:'20px',top:'60px'}}>
<img src={'http://localhost/Projet%20IHM/Cars/'+elements.url}  width='400' height='210'/>
</div>
<br/>
<div className="text-center">
<div className="h3 mt-5 text-nowrap text-uppercase">{elements.Marque}</div>
<div className="h5  mt-3">{elements.Modele}</div>


</div>

<br/>
<div className="f-flex justify-content-between  ms-5 text-nowrap">
<div className="  text-nowrap">
    <span className="border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{left:'4px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'50px',right:'45px'}}>0 KM</span>

<span>{(elements.Boite==="Automatique")?<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{left:'7px'}}><img src={Boite}  width='40' height='30' /></span>:<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark position-relative" style={{right:'3px'}}><img src={Boite}  width='40' height='30' /></span>}
<span className='position-relative fw-bold' style={{top:'50px',right:'65px'}}>{elements.Boite}</span></span>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark"><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'50px',right:'52px'}}>{elements.Energie}</span>
</span>
<span className='position-relative' style={{right:'60px'}}>
<span className="  border border-3 pt-2 px-1 pb-3 rounded-5 text-dark border border-dark"><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'50px',right:'57px'}}>{elements.Nombre_porte} portes</span>
</span>
</div>
<br/>
<br/>

      </div>
      </div>
      </div>

      </div>
     

      </button>
   
       

    </div>)})}  <Add_cars /></div>


  
    
    </div>
  )
}

export default Cars
