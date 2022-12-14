import React,{useState,useEffect} from 'react'
import './Cars.css'
import { useNavigate } from 'react-router-dom'
import Compteur from './Picture/Compteur.png'
import Nav_user from './../Nav_user/Nav_user'
import Porte from './Picture/Porte.png'
import Gazoile from './Picture/Gazoile.png'
import Boite from './Picture/Boite.png'
import {AiOutlineFullscreen}  from 'react-icons/ai';
import {IoCarSportSharp}  from 'react-icons/io5';
import {IoCarSport}  from 'react-icons/io5';

function Cars() {
    let history = useNavigate();

    function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
    var username=getCookie('Username');
    var photo=getCookie('photo');
    var id=getCookie('id');
    var i;
    useEffect(()=>{if(document.cookie.length ===0){
      history('/user_login');
        }},[]) ;
   
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

    const add_vue=(id_car)=>{
      let ft =new FormData();
      ft.append('id',id_car);
      fetch('http://localhost/Projet%20IHM/Cars/add_vue.php', {
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
       }

    useEffect(()=>{getData();},[])
    const show=(id)=>{


      add_vue(id);
      cars.map((elements,index)=>{ if (id===elements.Id_car){
    
      
    console.log(elements);
    history(`/cars/${id}`);
    
    
    }})};
   
  return (
    <div className="background">
             <Nav_user username={username} photo={photo} id={id} />
             <div className='d-flex justify-content-center mb-5 ' style={{marginTop:'-28px'}}> <span className="position-relative " style={{bottom: "2.5px",marginRight:'4px'}}><IoCarSport size={40}/></span><span className='h1 mt-2 ms-1'>Cars</span></div>

            <div className="row  row-cols-3  " > {cars.map((elements,index)=>{return(
              <div key={index} className="d-flex justify-content-center mt-5">

            <button className=" mt-1 ms-1 btn" onClick={() =>{show(elements.Id_car)}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" >  <div className=" card  width_card bg-light">
            <div className="card">

      <div className="card-header " style={{height:'45px'}}>
        <div className=" d-flex justify-content-start " >
<AiOutlineFullscreen size={30}/></div>

        <div className=" h2   d-flex justify-content-end position-relative" style={{bottom:'25px'}}>{elements.price} DT</div>
        </div>
        <div className="card-body ">

<div className="ms-5">
<img src={'http://localhost/Projet%20IHM/Cars/'+elements.url}  width='400' height='210'/>
</div>
<div className="text-center">
<div className="h2 mt-3 text-nowrap text-uppercase">{elements.Marque}</div>
<div className="h4  mt-3">{elements.Modele}</div>
<br/>

</div>
<div className="f-flex justify-content-between  ms-5 text-nowrap">
<div className=" ms-5 text-nowrap">
{(elements.Boite==="Automatique")? 
<div className=" position-relative " style={{left:'25px'}}>
    
    <span className="border border-3  px-2   text-dark border border-dark position-relative" style={{left:'4px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'41px',right:'38px'}}>0 KM</span>
{(elements.Boite==="Automatique")?   <span className="position-relative" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span>
   <span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{elements.Boite}</span></span>: <span className="position-relative me-4" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span><span className='position-relative fw-bold' style={{top:'40px',right:'38px'}}>{elements.Boite}</span></span>}
<span className="position-relative" style={{left:'10px'}}>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 px-2  text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'46px'}}>{elements.Energie}</span>
</span></span>
<span className='position-relative ms-1' style={{right:'45px'}}>
<span className="  border border-3  px-2 text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{elements.Nombre_porte} portes</span>
</span>
</div>:<div >
    
    <span className="border border-3  px-2   text-dark border border-dark position-relative" style={{left:'4px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Compteur}  width='40' height='37'/>
</span><span className='position-relative fw-bold' style={{top:'41px',right:'38px'}}>0 KM</span>
{(elements.Boite==="Automatique")?   <span className="position-relative" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span>
   <span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{elements.Boite}</span></span>: <span className="position-relative me-4" style={{right:'10px'}}><span className="  border border-3 px-2 text-dark border border-dark position-relative" style={{left:'13px',borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Boite}  width='40' height='30' /></span><span className='position-relative fw-bold' style={{top:'40px',right:'38px'}}>{elements.Boite}</span></span>}
<span className="position-relative" style={{left:'10px'}}>
<span className='position-relative' style={{right:'45px'}}><span className="  border border-3 px-2  text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Gazoile}  width='40' height='40'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'46px'}}>{elements.Energie}</span>
</span></span>
<span className='position-relative ms-1' style={{right:'45px'}}>
<span className="  border border-3  px-2 text-dark border border-dark" style={{borderRadius:'50%',paddingBottom:'20px',paddingTop:'13px'}}><img src={Porte}  width='40' height='50'/></span>
<span className='position-relative fw-bold' style={{top:'40px',right:'47px'}}>{elements.Nombre_porte} portes</span>
</span>
</div>}
</div>
<br/>
<br/>

      </div>
      </div>
      </div>
     

 
   
       

    </div>
    </button>
    </div>
    
    )})}  </div>


  
    
    </div>
  )
}

export default Cars
