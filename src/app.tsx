function App() {
  return (
    <div>
      <img src="" alt="" />
      <h1>Body Mass Index Calculator</h1>
      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>

      <div>
        <div>
          {" "}
          Enter your details below
          <input type="radio" id="" name="" value="email" />
          <label>Metric</label>
          <input type="radio" id="" name="" value="email" />
          <label>Imperial</label>
        </div>

        <div>
          <form action="">
            <label>Height</label>
            <input type="number" id="" name="" value="email" />
            <label>Weight</label>
            <input type="number" id="" name="" value="" />
          </form>
        </div>

        <div id="result">
          <h1> Your BMI is...</h1>
          <span>result </span>
          <p>
            {" "}
            Your BMI suggests you're add classification Your ideal weight is
            between add range
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
