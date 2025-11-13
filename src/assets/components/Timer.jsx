import { useState, useEffect } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer
    if (running) {
      timer = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [running])

  const reset = () => setSeconds(0)

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}m ${sec.toString().padStart(2, '0')}s`
  }

  return (
    <div className="border border-dark rounded-4 p-3 m-3 text-center">
      <h3 className="text-primary fw-bold">TIMER</h3>
      <div className="fs-3">{seconds === 0 ? '0s' : formatTime(seconds)}</div>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-danger" onClick={reset}><i class="bi bi-arrow-counterclockwise ga">
            </i>Reset</button>   
        <button
          className={`btn ${running ? 'btn-warning' : 'btn-success'}`}
          onClick={() => setRunning(!running)}
          
        >
        <i class="bi bi-caret-right"></i>
        {running ? 'Pause' : 'Run'}
        </button>
      </div>
    </div>
  )
}

export default Timer
