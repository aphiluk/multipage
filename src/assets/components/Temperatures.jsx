import { useState } from "react"
import Value from "./Value"

const Temperatures = () => {
  const [celsius, setCelsius] = useState(25)
  const [fahrenheit, setFahrenheit] = useState(77)
  const [kelvin, setKelvin] = useState(298.15)

  const updateFromCelsius = (newC) => {
    setCelsius(newC)
    setFahrenheit(newC * 9 / 5 + 32)
    setKelvin(newC + 273.15)
  }

  const updateFromFahrenheit = (newF) => {
    const newC = (newF - 32) * 5 / 9
    setCelsius(newC)
    setFahrenheit(newF)
    setKelvin(newC + 273.15)
  }

  const updateFromKelvin = (newK) => {
    const newC = newK - 273.15
    setCelsius(newC)
    setFahrenheit(newC * 9 / 5 + 32)
    setKelvin(newK)
  }

  return (
    <div className="border border-dark rounded-4 p-3 m-3 text-center">
      <h3 className="text-primary fw-bold">TEMPERATURES</h3>

      <div className="d-flex justify-content-around mb-2">
        <span className="badge bg-primary fs-5">{celsius.toFixed(2)} °C</span>
        <span className="badge bg-primary fs-5">{fahrenheit.toFixed(2)} °F</span>
        <span className="badge bg-primary fs-5">{kelvin.toFixed(2)} °K</span>
      </div>

      <div className="d-flex justify-content-between gap-3">
        <Value name="CELSIUS" init={celsius} onChange={updateFromCelsius} type="float" />
        <Value name="FAHRENHEIT" init={fahrenheit} onChange={updateFromFahrenheit} type="float" />
        <Value name="KELVIN" init={kelvin} onChange={updateFromKelvin} type="float" />
      </div>
    </div>
  )
}

export default Temperatures
