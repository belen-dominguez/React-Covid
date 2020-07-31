import React, { useEffect, useState } from 'react';
import axios from "axios";
import Home from "./components/Home"
import Buscador from "./components/Buscador"
import {   BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import { Chart } from 'react-charts'
import './App.css';
import "./components/styles.css"


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

useEffect( () => {

  axios
    .get(`https://api.covid19api.com/live/country/${countryName?countryName:"tajikistan"}`)
    .then((response) => {

      setCountryInfo(response.data) 
    })

},[countryName]) 

const renderCard = (slug) => { 
  console.log(slug)
  setCountryName(slug) 
}

//console.log(countryInfo) 
//lo hago ahoa

  return ( 
    <div className="App">
      <Router>
          <Link to="/">Home</Link>
          <Link to="/buscador">Buscador</Link>
          


          <Route exact path="/">
            {data && <Home  data={data}/>}
          </Route>

          <Route exact path="/buscador">
            {dataCountry && <Buscador  paises={dataCountry} data={countryInfo} renderCard={renderCard} countryInfo= {countryInfo}/>}
          </Route>

        

          
      </Router>
     
     
    </div>
  );
}


export default App;


