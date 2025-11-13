import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./animation.css";

export default function Animation() {
  const [running, setRunning] = useState(false);
  const [ballType, setBallType] = useState("None");
  const ballRef = useRef(null);
  const fieldRef = useRef(null);

  let x = 0, y = 0;
  let vx = 5, vy = 5;
  let rotate = 0;
  const fw = 650, fh = 400, bd = 100;
  const maxX = fw - bd, maxY = fh - bd;

  useEffect(() => {
    const ball = ballRef.current;
    const field = fieldRef.current;
    field.style.width = fw + "px";
    field.style.height = fh + "px";
    ball.style.width = bd + "px";
    ball.style.height = bd + "px";

    const interval = setInterval(() => {
      if (running) {
        x += vx;
        y += vy;
        rotate += 5;
        if (x <= 0 || x >= maxX) vx = -vx;
        if (y <= 0 || y >= maxY) vy = -vy;
      }
      ball.style.left = x + "px";
      ball.style.top = y + "px";
      ball.style.transform = `rotate(${rotate}deg)`;
    }, 25);

    return () => clearInterval(interval);
  }, [running]);

const getBallTexture = () => {
  const base = import.meta.env.BASE_URL;
  switch (ballType) {
    case "Basketball":
      return `${base}animation/basketball.png`;
    case "Football":
      return `${base}animation/football.png`;
    case "Voleyball":
      return `${base}animation/volleyball.png`;
    case "Humen":
      return `${base}animation/human.jpg`;
    case "Cartoon":
      return `${base}animation/cartoon.png`;
    case "Logo":
      return `${base}animation/Logo.png`;
    default:
      return "";
  }
};


  return (
    <div className="anim-container">
      <h2></h2>
      <div className="anim-field" ref={fieldRef}>
        <div
          ref={ballRef}
          className="anim-ball"
          style={{
            backgroundImage:
              ballType !== "None" ? `url(${getBallTexture()})` : "none",
            backgroundColor: ballType === "None" ? "lightgray" : "transparent",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="anim-control d-flex justify-content-between mt-3">
        <button
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={() => setRunning(!running)}
        >
          <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>&nbsp;
          {running ? "PAUSE" : "RUN"}
        </button>

        <div>
          {["None", "Basketball", "Football", "Voleyball", "Humen", "Cartoon", "Logo"].map(
            (type) => (
              <button
                key={type}
                className={`btn btn-outline-primary mx-1 ${
                  ballType === type ? "active" : ""
                }`}
                onClick={() => setBallType(type)}
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
