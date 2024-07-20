import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({ height: 0, weight: 0 });
  const [imcResult, setImcResult] = useState(null);

  function handleValueChange(field, value) {
    setValues({ ...values, [field]: Number(value) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setImcResult(
      parseFloat(values.weight / (values.height / 100) ** 2).toFixed(2),
    );
  }

  return (
    <>
      <section className="left"></section>

      <section className="right">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Calculate IMC</h3>

          <span>
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              required={true}
              id="height"
              min={1}
              max={230}
              onChange={(e) => handleValueChange("height", e.target.value)}
            />
          </span>
          <span>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              required={true}
              id="weight"
              min={1}
              max={300}
              onChange={(e) => handleValueChange("weight", e.target.value)}
            />
          </span>
          <button type={"submit"}>Calculate</button>
        </form>
        <div className={"right-bottom"}>
          {!imcResult ? (
            <h3>Calculate your IMC first</h3>
          ) : (
            <h3>Result is {imcResult}</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
