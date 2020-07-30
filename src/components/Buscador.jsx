import React, { useEffect } from "react";
import { useState, Component } from "react";
import Select from 'react-select'
import Pais from "./Pais"

const Buscador = ({paises, data}) => {

    const [input,setInput] =useState("")
    
    
    // const options = paises.map( pais => {
    //    // console.log(pais.Slug)
    //     return { value:  pais.Slug, label: pais.Country  }
    //   })
    
    const renderCard = (e) => {
        console.log(e.value) 
     }
     
    return (
    <div>
        <h1>Buscador</h1>


        <div className="col-lg-4">
        <select id="categories" onChange={(e) => {renderCard(e)}} className="form-control">
        {
            paises.map((pais, index) => <option key={index} value={pais.Slug}>{pais.Country}</option>)
        }
        </select>
      </div>

     
        {/* <Select options={options }   onInputChange={(inputValue, {action}, ) => {console.log({inputValue, action})}}/> */}

        <div>
            {/* <Pais data={data}/> */}
        </div>
        
    </div>
    )
}


export default Buscador;


/*
https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z



*/