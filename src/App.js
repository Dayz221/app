import { useEffect, useState } from "react";
import './appg.css'
import classNames from "classnames";
import Timer from "./timer.js";

const App = () => {
  const [memMode, setMemMode] = useState(false)

  function setMem() {
    if (!memMode) {
      if (window.confirm("Вы учитель?)))) (ок - да, отмена - нет)")) return
      if (!window.confirm("Тооооооочно?)))) (ок - да, отмена - нет)")) return
      if (window.confirm("*Разработчик не несет ответственности за содержание данного режима, просим детей, пожилых и беременных отойти от экрана...")) {
        setMemMode(prev => !prev)
      }
    } else {
      setMemMode(prev => !prev)
    }
  }

  return (
    <div className="app">
      <Timer title={!memMode ? "До сдачи пояснительных записок:" : "До пиз***ей от Алексеича (Палыча) за ПЗ:"} deadline={new Date(2024, 1, 7, 0, 0, 0, 0).getTime()} />
      <Timer title={!memMode ? "До начала региона осталось:" : "До пиз***ей от Алексеича (Палыча) перед регионом:"}deadline={new Date(2024, 1, 20, 0, 0, 0, 0).getTime()} />
      <Timer title={!memMode ? "До конца региона осталось:" : "До пиз***ей от Алексеича (Палыча) после регионом:"}deadline={new Date(2024, 1, 20, 0, 0, 0, 0).getTime()} />
      <div className="memBlock">
        <button type="button" className={classNames('memButton', {active: memMode})} onClick={() => setMem()}>Мемный режим*</button>
      </div>
    </div>
  )
}

export default App;
