import React from 'react'
import { BrowserRouter, Routes, Route,Switch} from "react-router-dom"
import Login from "./../Admin/Admin-login/Login"
import Home_Admin from "./../Admin/Home_Admin/Home_Admin"
import Show_users from '../Admin/Show_users/Show_users'
import Cars from './../Admin/Cars/Cars'
import Commande from './../Admin/Commande/Commande'
import Setting from './../Setting/Setting'
import Show_car from './../Admin/Cars/Show_car'
import Nav from "./Nav"


export default function Router() {
  return (
  <BrowserRouter>
    <Nav />

  <Routes>      
     <Route exact  path="/login"  element={<Login />}/>
     <Route exact  path="/home_admin/"  element={<Home_Admin />}/>
     <Route exact  path="/users"  element={<Show_users />}/>
     <Route exact  path="/cars"  element={<Cars />}/>
     <Route exact  path="/cars/:id"  element={<Show_car />}/>
     <Route exact  path="/setting"  element={<Setting />}/>
     <Route exact  path="/commandes"  element={<Commande />}/>
       </Routes>
  </BrowserRouter>
  )
}
