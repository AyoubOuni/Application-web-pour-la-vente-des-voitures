import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


import car1 from './images/car3.jpg'
import car2 from './images/car2.jpg'
import car3 from './images/car1.jpg'
import Nav_user from './../Nav_user/Nav_user'
function Home() {
  let history = useNavigate();

  function getCookie(k){var v=document.cookie.match('(^|;) ?'+k+'=([^;]*)(;|$)');return v?v[2]:null}
  var username=getCookie('Username');
  var photo=getCookie('photo');
  var id=getCookie('id');
  useEffect(()=>{if(document.cookie.length ===0){
    history('/user_login');
      }},[]) ;

  return (

    <div className='bg'>
     <Nav_user username={username} photo={photo} id={id} />
      <div id="demo" class="carousel slide " style={{marginTop:'-30px'}} data-bs-ride="carousel">
           <div class="carousel-indicators">
           <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" ></button>
           <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
           <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
           </div>
           <div  class="carousel-inner" style={{position:"center"}}>
           <div class="carousel-item active" >
           <img src={car1} alt="Los Angeles" class="d-block w-50" style={ {height: '600px',  display: 'block',
           marginLeft: 'auto',
           marginRight:'auto',
           width: "50%"}}/>
           </div>
           <div class="carousel-item">
           <img src={car2} alt="Chicago" class="d-block w-50" style={ {height: '600px',  display: 'block', marginLeft: 'auto',marginRight:'auto',width: "50%"}}/>
          </div>
          <div class="carousel-item">
          <img src={car3} alt="New York" class="d-block w-50" style={ {height: '600px',  display: 'block',
           marginLeft: 'auto',
           marginRight:'auto',
           width: "50%"}}/>
          </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{width:"55%"}} >
          <span class="carousel-control-prev-icon" ></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{width:"55%"}}>
          <span class="carousel-control-next-icon "  ></span>
          </button>
          </div>
    </div>
  )
}

export default Home
