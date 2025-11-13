import React, { useState } from "react";
import "../index.css";

function Calculator() {
  const [screen, setScreen] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const numberClicked = (number) => {
    if (waitingForSecond) {
      setScreen(number.toString());
      setWaitingForSecond(false);
    } else {
      setScreen(screen === "0" ? number.toString() : screen + number);
    }
  };

  const operatorClicked = (op) => {
    if (firstOperand === null) {
      setFirstOperand(Number(screen));
    } else if (operator) {
      const result = calculate(firstOperand, Number(screen), operator);
      setFirstOperand(result);
      setScreen(String(result));
    }
    setOperator(op);
    setWaitingForSecond(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      default: return b;
    }
  };

  const equalClicked = () => {
    if (operator && firstOperand !== null) {
      const result = calculate(firstOperand, Number(screen), operator);
      setScreen(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecond(false);
    }
  };

  const ceClicked = () => {
    setScreen("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  return (
    <div className="bg01">
      <div className="cal-container">
        <div className="cal-display">{screen}</div>

        <div>
          <button className="cal-btn cal-btn-green" disabled>MC</button>
          <button className="cal-btn cal-btn-green" disabled>MR</button>
          <button className="cal-btn cal-btn-green" disabled>M+</button>
          <button className="cal-btn cal-btn-green" disabled>M-</button>
          <button className="cal-btn cal-btn-orange" onClick={ceClicked}>CE</button>
        </div>

        <div>
          {[7,8,9].map(n => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button className="cal-btn cal-btn-green" disabled>÷</button>
          <button className="cal-btn cal-btn-green" disabled>√</button>
        </div>

        <div>
          {[4,5,6].map(n => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button className="cal-btn cal-btn-green" disabled>×</button>
          <button className="cal-btn cal-btn-green" disabled>%</button>
        </div>

        <div>
          {[1,2,3].map(n => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("-")}>−</button>
          <button className="cal-btn cal-btn-green" disabled>1/x</button>
        </div>

        <div>
          <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(0)}>0</button>
          <button className="cal-btn cal-btn-blue" disabled>.</button>
          <button className="cal-btn cal-btn-blue" disabled>+/-</button>
          <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("+")}>+</button>
          <button className="cal-btn cal-btn-green" onClick={equalClicked}>=</button>
        </div>
      </div>

      <div className="student">67164038 อภิรักษ์ ภูมิเพ็ง</div>
    </div>
  );
}

export default Calculator;
