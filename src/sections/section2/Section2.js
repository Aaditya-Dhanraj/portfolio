import React, { useEffect, useState } from "react";
import "../section3/section3.css";
import { Line } from "react-chartjs-2";

const Section2 = () => {
  const data = {
    labels: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
    datasets: [
      {
        label: "Skills",
        lineTension: 0.3,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderColor: "rgba(0,0,0,0.7)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,0,0,0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0,0,0,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "rgba(0,0,0,0.5)",
        pointHitRadius: 30,
        data: [80, 75, 85, 90, 70, 80, 70],
      },
    ],
  };
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    setWid(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div id="sec2" className="section3">
      {console.log(wid)}
      <div className="outter1">
        <span
          className="inBox1"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bolder",
            fontSize: "1.8em",
            marginLeft: "8px",
          }}
        >
          Technology Stack
        </span>
        <div className="inner1 inner3">
          <div className="inner2 inner3">
            <Line
              id="canvas"
              options={{
                responsive: true,
                scales: {
                  xAxes: [
                    {
                      // gridLines: false,
                    },
                  ],
                  yAxes: [
                    {
                      // gridLines: false,
                      ticks: {
                        min: 50,
                        max: 100,
                      },
                    },
                  ],
                },
              }}
              height={wid < 450 ? 400 : null}
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
