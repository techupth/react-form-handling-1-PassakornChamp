import { useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState("Hello World");
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    setWords(inputText);
  }

  return (
    <div className="App">
      <div className="greeting-container">{words}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
