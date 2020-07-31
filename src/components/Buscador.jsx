import React, { useEffect } from "react";
import { useState, Component } from "react";
import Select from 'react-select'
import Pais from "./Pais"



const Buscador = ({paises, renderCard, countryInfo}) => {

    //const [input,setInput] =useState("")
    
    
//app
    return (
    <div>
        <h1>Buscador</h1>

        <div className="col-lg-4">
        <select id="categories" onChange={(e) => {renderCard(e.target.value)}} className="form-control">
        {
            paises.map((pais, index) => <option key={index} value={pais.Slug}>{pais.Country}</option>)
        }
        </select>

      </div>

        <div>
            {/* {countryInfo &&   <Pais data={countryInfo}/> } */}
            {countryInfo.length == 0 ?  <p>No hay informacion</p> : <Pais data={countryInfo} />  }
          
        </div>
        
    </div>
    )
}


export default Buscador;

