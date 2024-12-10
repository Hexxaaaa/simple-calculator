import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  // Fungsi untuk melakukan operasi kalkulator
  const calculate = (operation) => {
    let res;
    switch (operation) {
      case "add":
        res = num1 + num2;
        break;
      case "subtract":
        res = num1 - num2;
        break;
      case "multiply":
        res = num1 * num2;
        break;
      case "divide":
        res = num2 !== 0 ? num1 / num2 : "Error (div by 0)";
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter number 1"
          style={{ margin: "10px", padding: "10px", fontSize: "16px" }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter number 2"
          style={{ margin: "10px", padding: "10px", fontSize: "16px" }}
        />
      </div>
      <div>
        <button
          onClick={() => calculate("add")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <button
          onClick={() => calculate("subtract")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <button
          onClick={() => calculate("multiply")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <button
          onClick={() => calculate("divide")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ÷
        </button>
      </div>
      <h2>Result: {result !== null ? result : "—"}</h2>
    </div>
  );
};

export default App;
