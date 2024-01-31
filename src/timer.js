import { useState, useEffect } from "react"
import classNames from "classnames"

const Timer = ({deadline, title}) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [millis, setMillis] = useState(0)
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
            const d_ = c_ % 1000

            setDays(a)
            setHours(b)
            setMinutes(c)
            setSeconds(d)
            setMillis(d_)

            setIsCritical(delta < 1000*60*60*24)
        } else {
            setDays(0)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            setMillis(0)

            setIsCritical(delta < 1000*60*60*24)
        }
        }, 10)
    }, [])
    
    return (
        <div className={classNames("timer", {critical: isCritical})}>
            <h1 className="title">
                {title}
            </h1>
            <h2 className="date">
                {String(days).padStart(2, '0')}:
                {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}
                <span style={{color: "rgba(255, 255, 255, .4)"}}>.{String(millis).padStart(3, '0')}</span>
            </h2>
        </div>
    )
}

export default Timer