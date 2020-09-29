import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";
function App() {
  const [value, updateValue] = useState("");
  const [prev, updatePrev] = useState("0");
  const [operator, updateOperator] = useState("");

  const clear = () => {
    updateValue("");
    updatePrev(0);
    updateOperator("");
  };
  const deletion = () => {
    updateValue(value.slice(0, value.length - 1));
    updateOperator(value.slice(value.length - 1, value.length));
  };
  const updateInput = (e) => {
    if (operator === "=") {
      if (
        e.target.innerText == "+" ||
        e.target.innerText == "-" ||
        e.target.innerText == "*" ||
        e.target.innerText == "/" ||
        e.target.innerText == "%"
      ) {
        updateValue(prev.toString() + e.target.innerText);
      } else {
        updateValue(e.target.innerText);
      }
    } else {
      updateValue(value + e.target.innerText);
    }
    updateOperator(e.target.innerText);
  };
  const calculate = () => {
    updateOperator("=");
    try {
      const val = math.evaluate(value);
      updatePrev(val);
    } catch (error) {
      updatePrev("error");
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="screen">
          <div className="current-div">
            <span className="current">{value}</span>
          </div>
          <br />
          <span className="previous">{prev}</span>
        </div>
        <div className="grid-container">
          <div onClick={clear} className="item1 element">
            <a href="#"> C</a>
          </div>
          <div onClick={deletion} className="item2 element">
            <a href="#">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
          <div onClick={updateInput} className="item3 element">
            <a href="#">%</a>
          </div>
          <div onClick={updateInput} className="item4 element">
            <a href="#">/</a>
          </div>
          <div onClick={updateInput} className="item5 element">
            <a href="#">7</a>
          </div>
          <div onClick={updateInput} className="item6 element">
            <a href="#">8</a>
          </div>
          <div onClick={updateInput} className="item7 element">
            <a href="#">9</a>
          </div>
          <div onClick={updateInput} className="item8 element">
            <a href="#">*</a>
          </div>
          <div onClick={updateInput} className="item9 element">
            <a href="#">4</a>
          </div>
          <div onClick={updateInput} className="item10 element">
            <a href="#">5</a>
          </div>
          <div onClick={updateInput} className="item11 element">
            <a href="#">6</a>
          </div>
          <div onClick={updateInput} className="item12 element">
            <a href="#">-</a>
          </div>
          <div onClick={updateInput} className="item13 element">
            <a href="#">3</a>
          </div>
          <div onClick={updateInput} className="item14 element">
            <a href="#">2</a>
          </div>
          <div onClick={updateInput} className="item15 element">
            <a href="#">1</a>
          </div>
          <div onClick={updateInput} className="item16 element">
            <a href="#">+</a>
          </div>
          {/* <div onClick={updateInput} className="item17 element"></div> */}
          <div onClick={updateInput} className="item17 element">
            <a href="#">0</a>
          </div>
          <div onClick={updateInput} className="item19 element">
            <a href="#">.</a>
          </div>
          <div onClick={calculate} className="item20 element">
            <a href="#">=</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
