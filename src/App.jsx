import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({ height: null, weight: null });
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
      <section className="left">
        <div>
          <h3>What is BMI?</h3>
          <p>
            BMI (Body Mass Index) is a measure that uses your height and weight
            to estimate whether your body weight is in a healthy range.
          </p>
        </div>
        <div>
          <h3>BMI Categories</h3>
          <ul className="categories-list">
            <li>Underweight: BMI &lt; 18.5</li>
            <li>Normal weight: BMI 18.5 - 24.9</li>
            <li>Overweight: BMI 25 - 29.9</li>
            <li>Obesity: BMI 30 or greater</li>
          </ul>
        </div>
        <div>
          <h3>Health Implications:</h3>
          <ul>
            <li>Underweight: Risk of malnutrition, osteoporosis</li>
            <li>Normal weight: Lower risk of chronic diseases</li>
            <li>Overweight: Increased risk of cardiovascular disease</li>
            <li>Obesity: Higher risk of diabetes, heart disease</li>
          </ul>
        </div>
      </section>

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
              value={values.height}
              placeholder={"Ex: 180"}
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
              value={values.weight}
              placeholder={"Ex: 80"}
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
