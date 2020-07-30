import React from "react";
import { useState, Component } from "react";
import Select from 'react-select'

const Buscador = ({paises}) => {


    
    const options = paises.map( pais => {
        return { value:  pais.Slug, label: pais.Country  }
      })
    
      const renderCard = () => {

      }
     
    return (
    <div>
        <h1>Buscador</h1>

     
        <Select options={options} onChange={renderCard}/>

        <div>
            {/* <Pais /> */}
        </div>
        
    </div>
    )
}


export default Buscador;


/*
https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z



*/