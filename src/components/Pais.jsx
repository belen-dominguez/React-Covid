import React from "react"


const Pais = ({data}) => {

    return (
        <div>
            <h1>{data.Country}</h1> 
            <p>Confirmados: {data.Confirmed}</p> 
            <p>Muertes: {data.Deaths}</p> 
            <p>Recuperados: {data.Recovered}</p> 
            <p>Activos: {data.Active}</p>

            <p>Ultima actualizacion: {data.Date}</p>
        </div>
    )

}


export default Pais;