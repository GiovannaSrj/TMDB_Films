import { useEffect, useRef } from "react";
import "../styles/popularityCircle.css";

export default function PopularityCircle({ pop }) {
  const circleRef = useRef(null);
  const fundoRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const fundo = fundoRef.current;
    if (!circle) return;

    circle.style.strokeDashoffset = 113.097 - (113.097 * pop) / 100;

    const numberElement = circle.parentElement.querySelector(".number");

    if (numberElement) {
      numberElement.innerHTML = pop + "%";
    }

    if (pop >= 70) {
      circle.style.stroke = "rgb(115, 236, 123)";
      fundo.style.stroke = "rgba(115, 236, 123, 0.232)";
    } else if (pop >= 40) {
      circle.style.stroke = "rgb(234, 236, 115)";
      fundo.style.stroke = "rgba(234, 236, 115, 0.232)";
    } else if (pop >= 0) {
      circle.style.stroke = "rgb(243, 65, 68)";
      fundo.style.stroke = "rgba(243, 65, 68, 0.232)";
    }
  }, [pop]);

  return (
    <>
      <div className="box">
        <div className="box-circle">
          <svg>
            <circle cx={20} cy={20} r={20}></circle>

            <circle ref={fundoRef} cx={20} cy={20} r={18}></circle>

            <circle
              ref={circleRef}
              className="circlePop"
              cx={20}
              cy={20}
              r={18}
            ></circle>
          </svg>
        </div>
        <div className="number">{pop}%</div>
      </div>
    </>
  );
}
