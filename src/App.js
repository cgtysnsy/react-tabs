import "./App.css";
import { useState } from "react";
import data from "./data";

const information = data;

function App() {
  const [slot, setSlote] = useState(0);
  const [paragraph, setParagraph] = useState(information[slot].paragraph);
  const [classActive, setClassActive] = useState("btn");

  const handlerClick = (index) => {
    setSlote(index);
    setParagraph(information[slot].paragraph);
    console.log(slot);
    console.log(information[slot].id);
    setClassActive("active-btn");
    // if (slot === information[slot].id) {
    //  setClassActive(index);
    //}
    console.log(classActive);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="btn-container">
          {information.map((info, index) => {
            return (
              <div
                className={`btn ${index === slot && classActive}`}
                key={info.id}
                onClick={() => handlerClick(index)}
              >
                {info.title}
              </div>
            );
          })}
        </div>

        <div className="paragraph-container">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
