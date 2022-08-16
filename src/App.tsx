import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import BarChart from "./components/barChart.component";
import LineChart from "./components/lineChart.component";
import PolarChart from "./components/polarChart.component";
import { RootState } from "./redux/store";
function App() {
  const dispatch = useDispatch();

  const Countries = useSelector<RootState, Object>(
    (state) => state.Country.Countries
  );
  const Ginis = useSelector<RootState, Object>((state) => state.Gini.Ginis);
  const countries = {
    labels: Object.values(Countries)
      .slice(165, 175)
      .map((c) => c.name),
    datasets: [
      {
        label: "population",
        data: Object.values(Countries)
          .slice(165, 175)
          .map((c) => c.population),
        backgroundColor: [
          "#ff000056",
          "#00ccff",
          "#00ffbb",
          "#ffb700",
          "#006eff",
        ],
        borderColor: "#10101054",
        borderWidth: 5,
        skipNull: true,
        pointRadius: 7,
      },
    ],
  };
  console.log(Object.values(Ginis));
  const ginis = {
    labels: Object.values(Ginis)
      .slice(165, 175)
      .map((c) => c.name),
    datasets: [
      {
        label: "population",
        data: Object.values(Ginis)
          .slice(165, 175)
          .map((c) => (typeof c.gini === "undefined" ? 40 : c.gini)),
        backgroundColor: [
          "#ff000056",
          "#00ccff",
          "#fffb00",
          "#ff6600",
          "#006eff",
          "#00ff1554",
          "#00ff11",
          "#08664d",
          "#cc00ff",
          "#ff0099",
        ],
        borderColor: "#10101054",
        borderWidth: 5,
        skipNull: true,
        pointRadius: 7,
      },
    ],
  };

  useEffect(() => {
    dispatch({ type: "GET_COUNTRIES" });
    dispatch({ type: "GET_GINIS" });
  }, [dispatch]);

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <h1>Countries by population Bar Chart</h1>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={countries} />
      </div>
      <div style={{ width: 700 }}>
        <h1>Countries by population Line Chart</h1>
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={countries} />
      </div>
      <div style={{ width: 700 }}>
        <h1>Countries by gini Polar Chart</h1>
      </div>
      <div style={{ width: 700 }}>
        <PolarChart chartData={ginis} />
      </div>
    </div>
  );
}

export default App;
