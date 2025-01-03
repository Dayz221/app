import { useEffect, useState } from "react";
import './appg.css'
import classNames from "classnames";
import Timer from "./timer.js";

const App = () => {
  const [memMode, setMemMode] = useState(false)

  function setMem() {
    if (!memMode) {
      if (window.confirm("Вы учитель?)))) (ок - да, отмена - нет)")) return
      if (!window.confirm("Тооооооочно? (ок - да, отмена - нет)")) return
      if (!window.confirm("Проверим?? (ок - да, отмена - нет)")) return
      if (!(window.prompt('Запиши корень уравнения: lg(4x+10) - lg(x+3) = 2lg4 - lg8') == "-2")) return
      if (window.confirm("*Разработчик не несет ответственности за содержание данного режима, просим детей, пожилых и беременных отойти от экрана...")) {
        setMemMode(prev => !prev)
      }
    } else {
      setMemMode(prev => !prev)
    }
  }

  return (
    <div className="app">
      <div className="title2">Ты отчислен из-за ПТП. Держи авокадо!</div>
      {/* <Timer title={!memMode ? "ПЗ сдаем на регионе:" : "До пиз***ей от Алексеича (Палыча) за ПЗ:"} deadline={new Date(2024, 1, 20, 0, 0, 0, 0).getTime()} />
      <Timer title={!memMode ? "До начала региона осталось:" : "До пиз***ей от Алексеича (Палыча) перед регионом:"}deadline={new Date(2024, 1, 20, 0, 0, 0, 0).getTime()} />
      <Timer title={!memMode ? "До конца региона осталось:" : "До пиз***ей от Алексеича (Палыча) после региона:"}deadline={new Date(2024, 1, 22, 0, 0, 0, 0).getTime()} /> */}
      {/* <Timer title={!memMode ? "До отчисления по ПТП осталось:" : "До пиз***ей от Алексеича (Палыча) после региона:"}deadline={new Date(2024, 11, 12, 22, 0, 0, 0).getTime()} /> */}
      <img style={{maxWidth: "640px", width: "100%", margin: "10px"}} src="https://goodkitchen.su/image/catalog/05005/avokado-polovinki-poperechnoe-sechenie-2115922.jpg" />
      {/* <div className="memBlock">
        <button type="button" className={classNames('memButton', {active: memMode})} onClick={() => setMem()}>Реальное отображение*</button>
      </div> */}
    </div>
  )
}

export default App;
