import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [randomFact, setRandomFact] = useState("");

  const newRandFact = () => {
    Axios.get("https://uselessfacts.jsph.pl/random.json?language=en").then(
      (res) => {
        setRandomFact(res.data);
      }
    );
  };

  useEffect(() => {
    newRandFact();
  }, []);

  return (
    <div className="App">
      <h1 className="top">Want to Learn something new? Click the button</h1>
      <button className="fact" onClick={newRandFact}>
        Click Me!
      </button>
      <div className="power">
        <p>{randomFact?.text}</p>
        <p>
          {" "}
          Source:{" "}
          <a href={"{randomFact?.source}"} target="_blank" rel="noreferrer">
            {randomFact?.source}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
