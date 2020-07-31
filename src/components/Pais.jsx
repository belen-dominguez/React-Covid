import React from "react"


const Pais = ({data}) => {
     console.log(data)
    return ( 
         
        <div>
            <h1>{data[0].Country}</h1> 
            <p>Confirmados: {data[0].Confirmed}</p> 
            <p>Muertes: {data[0].Deaths}</p> 
            <p>Recuperados: {data[0].Recovered}</p> 
            <p>Activos: {data[0].Active}</p>

            <p>Ultima actualizacion: {data[0].Date}</p>

              

        </div>
    
    )

}


export default Pais;