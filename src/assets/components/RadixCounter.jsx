import { useState } from "react"

const ReddixCounter = () => {

    const [value, setvalue] = useState(10)

    const MinusClicked = () => {
        if (value <= 0)
            setvalue(4095)
        else
            setvalue(p => p - 1)
    }

    const plusClicked = () => {
        if (value >= 4095)
            setvalue(0)
        else
            setvalue(p => p + 1)
    }

    const ResetClicked = () => {
        setvalue(0)
    }               

    return (
        <div className="border border-2 border-black m-auto p-3 rounded-4" style={{ width: '600px' }}>
            <h1 className="text-center fw-bold">RADIX COUNTER</h1>
            <div>
                <div className="d-flex justify-content-between text-center gap-3 mt-3">
                    <div className="fs-4 fw-bold">
                        <div>[HEX]</div>
                        <div className="font-monospace fs-5 text-danger">{value.toString(16).toUpperCase().padStart(3, '0') }</div>
                    </div>
                    <div>
                        <div className="fs-4 fw-bold">[DEC]</div>
                        <div className="font-monospace fs-5 text-primary">{value.toString().padStart(4, '0')}</div>
                    </div>
                    <div>
                        <div className="fs-4 fw-bold">[OCT]</div>
                        <div className="font-monospace fs-5 text-success">{value.toString(8).padStart(4, '0') }</div>
                    </div>
                    <div>
                        <div className="fs-4 fw-bold">[BIN]</div>
                        <div className="font-monospace fs-5 text-warning">{value.toString(2).padStart(12, '0')  }</div>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-4">
                    <div><button className="btn btn-danger px-5" onClick={MinusClicked}>&minus;</button></div>
                    <div><button className="btn btn-secondary px-5" onClick={ResetClicked}>RESET</button></div>
                    <div><button className="btn btn-success px-5" onClick={plusClicked}>+</button></div>
                </div>
            </div>
        </div>
    )
}

export default ReddixCounter
