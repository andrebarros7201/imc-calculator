import './App.css'

function App() {

  return (
    <>
        <section className="left">

        </section>

        <section className="right">
            <h3>Calculate IMC</h3>

            <form>
            <span>
                <label htmlFor="height">Height (cm)</label>
                <input type="number" required={true} id="height" min={1} max={230}/>
            </span>
                <span>
                <label htmlFor="weight">Weight (kg)</label>
                <input type="number" required={true} id="height" min={1} max={300}/>
            </span>
                <button type={"submit"}>Calculate</button>
            </form>
            <div className={'right-bottom'}>

            </div>
        </section>

    </>
  )
}

export default App
