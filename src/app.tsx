import Logo from "./components/images/logo.svg";

function App() {
  return (
    <div className="flex flex-col px-6 items-center">
      <img src={Logo} alt="Logo" className="w-10 h-10 mt-8"/>
      <h1 className="font-inter font-semibold text-[#253347] text-5xl	text-center m-6">Body Mass Index Calculator</h1>
      <p className="font-inter font-normal text-[#5E6E85] text-base	 text-center">
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
