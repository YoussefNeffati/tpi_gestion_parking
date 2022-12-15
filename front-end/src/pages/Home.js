import React, { useState } from "react";import "../App.css";
import Chart from "react-apexcharts";
// import "bootstrap/dist/css/boostrap-min.css";
// import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800", "teal"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Véhicules",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Vélos",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
      {
        name: "Motos",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });
  return (
    <div className="container">
      <h1>
        Dashboard se suivi du parking <i class="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="450"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;