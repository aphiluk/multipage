import Value from "./Value"
import { useState } from "react"

const Adder = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div className="border border-dark rounded-4 p-3 m-3 text-center">
      <h3 className="text-primary fw-bold">ADD</h3>

      <div className="d-flex justify-content-between align-items-center px-3 mb-2">
        <span className="badge bg-secondary fs-5">A={a}</span>
        <span className="badge bg-primary fs-5">A+B={a + b}</span>
        <span className="badge bg-secondary fs-5">B={b}</span>
      </div>

      <div className="d-flex justify-content-between gap-3">
        <Value name="A" type="int" init={0} onChange={(val) => setA(val)} />
        <Value name="B" type="int" init={0} onChange={(val) => setB(val)} />
      </div>
    </div>
  )
}

export default Adder
