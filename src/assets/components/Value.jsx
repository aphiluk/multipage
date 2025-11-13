import { useEffect, useState } from "react"

const Value = ({ name, type, init, onChange }) => {
  const [value, setValue] = useState(init || 0)

  useEffect(() => {
    setValue(init || 0)
  }, [init])

  const increase = () => {
    const newValue = value + 1
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  const decrease = () => {
    const newValue = value - 1
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  return (
    <div
      className="border border-black border-1 rounded-2 mx-auto mt-2 p-2"
      style={{ width: 'fit-content' }}
    >
      <h6 className="text-primary text-center" style={{ fontSize: '0.85rem' }}>{name || 'VALUE'}</h6>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <button className="btn btn-danger btn-sm px-2" onClick={decrease}>−</button>

        <span className="fw-bold fs-6 text-primary">
          {type === 'int' ? Math.floor(value) : value.toFixed(2)}
        </span>

        <button className="btn btn-success btn-sm px-2" onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default Value
