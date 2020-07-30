import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{ 
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:{
//         labels: ['Nuevos casos', 'NUevas muertes', 'Recuperados', 'Total confirmados', 'Total muertes', 'Total recuperados' ],
//         datasets: [{
//           label: 'population',
//           data:[
//             {props.data.Global.NewConfirmed}, 
//             {props.data.Global.NewDeaths},
//             {props.data.Global.NewRecovered},
//             {props.data.Global.TotalConfirmed},
//             {props.data.Global.TotalDeaths},
//             {props.data.Global.TotalRecovered}
//           ],
//           backgroundColor:[
//             'rgba(199, 214, 109, 0.6)',
//             'rgba(220, 234, 178, 0.6)',
//             'rgba(179, 214, 198, 0.6)',
//             'rgba(168, 204, 201, 0.6)',
//             'rgba(117, 185, 190, 0.6)',
//             'rgba(193, 102, 107, 0.6)'
//           ]
//         }]
//       }
//     }
//   }

constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }


  // static defaultProps = {
  //   displayTitle:true,
  //   displayLegend: true,
  //   legendPosition:'right',
  //   location:'City'
  // }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            // title:{
            //   display:this.props.displayTitle,
            //   text:'Largest Cities In '+this.props.location,
            //   fontSize:25
            // },
            // legend:{
            //   display:this.props.displayLegend,
            //   position:this.props.legendPosition
            // }
          }}
        />

      </div>
    )
  }
}

export default Chart;