import React from 'react';
import Chart from "./Chart"

const Home = ({data}) => {

    const chartInfo =  {
         labels: ['Nuevos casos', 'NUevas muertes', 'Recuperados', 'Total confirmados', 'Total muertes', 'Total recuperados' ],
        datasets: [{
          label: 'population',
          data:[
            data.Global.NewConfirmed, 
            data.Global.NewDeaths,
            data.Global.NewRecovered,
            data.Global.TotalConfirmed,
            data.Global.TotalDeaths,
            data.Global.TotalRecovered
          ],
          backgroundColor:[
            'rgba(199, 214, 109, 0.6)',
            'rgba(220, 234, 178, 0.6)',
            'rgba(179, 214, 198, 0.6)',
            'rgba(168, 204, 201, 0.6)',
            'rgba(117, 185, 190, 0.6)',
            'rgba(193, 102, 107, 0.6)'
          ]
        }]
      }

    return ( 
        
    <div className="container">
        <h1>COVID‑19</h1>
        <p>App con información actualizada sobre el covid</p> 
        
        
        <h3>¿Qué es un coronavirus?</h3>
        <div className="d-flex justify-content-between ">
            <div className="detail" style={{width:"50%"}}>
                <p>Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones     respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.</p>
            </div>
            <div className="data">
              <h5>Información Global</h5>
                <p>Nuevos casos: {data.Global.NewConfirmed}</p>
                <p>Nuevas muertes: {data.Global.NewDeaths}</p> 
                <p>Recuperados: {data.Global.NewRecovered}</p> 
                <p>Total confirmados: {data.Global.TotalConfirmed}</p> 
                <p>Total muertes: {data.Global.TotalDeaths}</p> 
                <p>Total recuperados: {data.Global.TotalRecovered}</p> 
            </div>
        </div>

        <h3>¿Qué es la COVID‑19?</h3>
        <div className="d-flex justify-content-between">
            <div className="detail">
            <p>La COVID‑19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente. Tanto este nuevo virus como la enfermedad que provoca eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019. Actualmente la COVID‑19 es una pandemia que afecta a muchos países de todo el mundo.</p>
            </div>
            <div className="data">
                <Chart  chartData={chartInfo}/> 
            </div>
        </div>
        

     </div>
        
    )
}


export default Home;



