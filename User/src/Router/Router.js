import React from 'react'
import { BrowserRouter, Routes, Route,Switch} from "react-router-dom"
import Inscription from "./../User/Inscription/Inscription"
import Connexion from "./../User/Connexion/Connexion"
import Nav from "./Nav"
import Home from "./../Home/Home"
import Cars from "./../Cars/Cars"
import Show_car from "./../Show_cars/Show_car"
import Account from "./../Account/Account"
import Commande from './../Commande/Commande'

export default function Router() {
  return (
  <BrowserRouter>
    <Nav />

  <Routes>      

     <Route exact  path="/user_inscription"  element={<Inscription />}/>
     <Route exact  path="/user_login"  element={<Connexion />}/>
     <Route exact  path="/home"  element={<Home />}/>
     <Route exact  path="/cars"  element={<Cars />}/>
     <Route exact  path="/cars/:id"  element={<Show_car />}/>
     <Route exact  path="/account"  element={<Account />}/>
     <Route exact  path="/commandes"  element={<Commande />}/>


       </Routes>
  </BrowserRouter>
  )
}
