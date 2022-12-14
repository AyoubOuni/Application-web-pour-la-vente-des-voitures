import React, { useState, useRef } from "react";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuid } from 'uuid';

function Add_cars() {
  var [Cars, setcars] = useState({
    
    marque: "",
    modele: "",
    annee: "",
    energie: "",
    prix: "",
    boite: "",
    puissance: "",
    nombreportes: "",
    photo: "",
  });
  var id;
const id_uuid=uuid();
id=id_uuid.substr(24);
  let add_car = (e) => {
    console.log(Cars.photo);
    let car = new FormData();

    console.log(Cars);
    car.append("Id",id);
    car.append("marque", Cars.marque);
    car.append("modele", Cars.modele);
    car.append("annee", Cars.annee);
    car.append("energie", Cars.energie);
    car.append("prix", Cars.prix);
    car.append("boite", Cars.boite);
    car.append("puissance", Cars.puissance);
    car.append("nombreportes", Cars.nombreportes);
    car.append("photo", Cars.photo);
    fetch("http://localhost/Projet%20IHM/Cars/Add_car.php", {
      method: "POST",
      body: car,
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
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 pt-2">
        <div
          className=" card width_card   "
          style={{ backgroundColor: "#f0f1f2" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button
            type="button"
            class="btn "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            <BsFillPlusCircleFill size={100} />
            <br />
            <div className="d-flex justify-content-center h2 mt-4">
              ADD New Car
            </div>
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <br />
                <div className="d-flex justify-content-center">
                  <h1
                    class="modal-title fs-2 text-center "
                    id="exampleModalLabel"
                  >
                    Add New Car
                  </h1>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form autoComplete="off" required>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Marque:
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setcars({ ...Cars, marque: e.target.value });
                      }}
                      placeholder="Entrer le Marque de voiture à ajouter"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Modele:
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setcars({ ...Cars, modele: e.target.value });
                      }}
                      placeholder="Entrer le Modele de voiture à ajouter"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Année:
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setcars({ ...Cars, annee: e.target.value });
                      }}
                      placeholder="Entrer l'année de fabrication de voiture à ajouter"
                      class="form-control"
                      id="recipient-annee"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Energie :
                    </label>
                    <select
                      onChange={(e) => {
                        setcars({ ...Cars, energie: e.target.value });
                      }}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select the type of Energie</option>
                      <option value="Essence">Essence</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electrique">Electrique</option>
                      <option value="Gaz">Gaz</option>
                    </select>{" "}
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Boîte de vitesse:
                    </label>
                    <select
                      onChange={(e) => {
                        setcars({ ...Cars, boite: e.target.value });
                      }}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" selected>
                        Select le type de Boîte de vitesse
                      </option>
                      <option value="Automatique">Automatique</option>
                      <option value="Manuelle">Manuelle</option>
                    </select>{" "}
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Puissance fiscale:
                    </label>
                    <input
                      onChange={(e) => {
                        setcars({ ...Cars, puissance: e.target.value });
                      }}
                      type="text"
                      placeholder="Entrer la Puissance fiscale de voiture à ajouter"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Prix:
                    </label>
                    <input
                      onChange={(e) => {
                        setcars({ ...Cars, prix: e.target.value });
                      }}
                      type="text"
                      placeholder="Entrer le prix de voiture à ajouter"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Nombre de portes:
                    </label>
                    <select
                      onChange={(e) => {
                        setcars({ ...Cars, nombreportes: e.target.value });
                      }}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select le Nombre de portes</option>
                      <option value="2">2 Portes</option>
                      <option value="3">3 Portes</option>
                      <option value="4">4 Portes</option>
                      <option value="5">5 Portes</option>
                    </select>{" "}
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="h4">
                      Photo:
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="recipient-name"
                      onChange={(e) => {
                        setcars({ ...Cars, photo: e.target.files[0] });
                      }}
                      accept="image/*"
                    />
                  </div>
                </form>
              </div>
              <hr />
              <div class="d-flex justify-content-center">
                <div class="mt-2 mb-4  ">
                  <button
                    type="button"
                    class="btn btn-primary "
                    onClick={add_car}
                  >
                    Valider
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary ms-3"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_cars;
