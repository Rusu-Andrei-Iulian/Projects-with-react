import React from "react";

function App() {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-IT", { hour12: false })
  );

  function updateTime() {
    setTime(new Date().toLocaleTimeString("en-IT", { hour12: false }));
  }

  function getTime() {
    setInterval(updateTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
