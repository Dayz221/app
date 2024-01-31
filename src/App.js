import { useEffect, useState } from "react";
import './app.css'
import classNames from "classnames";

const App = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const deadline = new Date(2024, 1, 7, 0, 0, 0, 0).getTime()
  const [isCritical, setIsCritical] = useState(false)

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      const delta = deadline - date.getTime()

      if (delta >= 0) {
        const a = Math.floor(delta / (1000*60*60*24))
        const a_ = delta % (1000*60*60*24)
        const b = Math.floor(a_ / (1000*60*60))
        const b_ = a_ % (1000*60*60)
        const c = Math.floor(b_ / (1000*60))
        const c_ = b_ % (1000*60)
        const d = Math.floor(c_ / 1000)

        setDays(a)
        setHours(b)
        setMinutes(c)
        setSeconds(d)

        setIsCritical(delta < 1000*60*60*24)
      }
    }, 100)
  }, [])

  return (
    <div className={classNames("app", {critical: isCritical})}>
      <h1 className="title">
        До сдачи пояснительных записок осталось:
      </h1>
      <h2 className="date">
        {String(days).padStart(2, '0')}:
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h2>
    </div>
  )
}

export default App;
