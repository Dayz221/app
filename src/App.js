import { useEffect, useState } from "react";
import './appg.css'
import classNames from "classnames";
import Timer from "./timer.js";

const App = () => {
  

  return (
    <div className="app">
      <Timer title="До сдачи пояснительных записок:" deadline={new Date(2024, 1, 7, 0, 0, 0, 0).getTime()} />
      <Timer title="До региона осталось:" deadline={new Date(2024, 1, 20, 0, 0, 0, 0).getTime()} />
    </div>
  )
}

export default App;
