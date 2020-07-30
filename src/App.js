import React, { useEffect, useState } from 'react';
import axios from "axios";
import Home from "./components/Home"
import Buscador from "./components/Buscador"

import { Chart } from 'react-charts'
import './App.css';


function App() {
const [data, setData] = useState(null);
const [countryName, setCountryName] = useState("")
const [dataCountry, setDataCountry] = useState(null);
const [countryInfo, setCountryInfo] = useState("")


useEffect( () => {

  axios
    .get('https://api.covid19api.com/summary')
    .then((response) => {

      setData(response.data)
    })

},[]) 

useEffect( () => {

  axios
    .get(`https://api.covid19api.com/countries`)
    .then((response) => {

      setDataCountry(response.data) 
    })

},[]) 

// useEffect( () => {

//   axios
//     .get(`https://api.covid19api.com/live/country/${countryName}`)
//     .then((response) => {

//       setCountryInfo(response.data) 
//     })

// },[countryName]) 






  return (
    <div className="App">
     {data && <Home  data={data}/>}
     {dataCountry && <Buscador  paises={dataCountry} data={countryInfo}/>}
    </div>
  );
}

export default App;


/*
https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z



*/