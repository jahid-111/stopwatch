import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [laps, setLaps] = useState([]);

  let timeRef = useRef(null);
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    // clearInterval(timeRef.current);
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null; // Clear the interval reference
    }
  };

  const handleLap = () => {
    if (startTime != null && now != null) {
      setLaps((prevLaps) => [...prevLaps, (now - startTime) / 1000]);
    }
  };

  let secondPass = 0;
  if (startTime != null && now != null) {
    secondPass = (now - startTime) / 100;
  }

  return (
    <>
      <section className="relative mx-auto min-h-screen">
        <h3 className=" text-4xl font-semibold"> Stopwatch </h3>

        <div className=" overflow-x-scroll h-[550px]">
          {laps.map((lap, i) => (
            <h4 className=" w-full" key={i}>
              <li className=" py-1 px-30 bg-red-100 rounded-lg text-lg my-1">
                {" "}
                Lap {i + 1}: {lap.toFixed(2)} seconds
              </li>
            </h4>
          ))}
        </div>

        <div className=" absolute bottom-40 left-0 right-0">
          <h4 className=" text-2xl">Time : {secondPass.toFixed(2)} </h4>
          <h4 className=" text-2xl">Stop : {secondPass.toFixed(2)} </h4>
        </div>

        <div className=" absolute bottom-16  left-0 right-0 ">
          <div className="   flex justify-center items-center gap-5 font-semibold my-4">
            <button
              onClick={handleStart}
              className=" px-6 py-2 bg-gray-300 hover:text-gray-500 rounded-xl "
            >
              {" "}
              Start{" "}
            </button>
            <button
              onClick={handleLap}
              className=" px-6 py-2 bg-gray-300 hover:text-gray-500 rounded-xl "
            >
              {" "}
              Lap{" "}
            </button>
            <button
              onClick={handleStop}
              className=" px-6 py-2 bg-gray-300 hover:text-gray-500 rounded-xl "
            >
              {" "}
              Stop{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
