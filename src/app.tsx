import Logo from "./components/images/logo.svg";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#D8E2E7] ">
      <div className="flex flex-col px-6 items-center ">
        <img src={Logo} alt="Logo" className="w-10 h-10 mt-8" />
        <h1 className="font-inter font-semibold text-[#253347] text-5xl	text-center m-6 antialiased">
          Body Mass Index Calculator
        </h1>
        <p className="font-inter font-normal text-[#5E6E85] text-base	 text-center antialiased">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>

        <div className="bg-white p-6 rounded-2xl mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="font-inter font-semibold text-2xl text-[#253347] antialiased">
              Enter your details below
            </h1>
            <div className="flex gap-6">
              <label className="font-inter font-semibold text-base text-[#253347] flex gap-6">
                <input type="radio" id="" name="" value="email" />
                Metric
              </label>

              <label className="font-inter font-semibold text-base text-[#253347] flex gap-6">
                <input type="radio" id="" name="" value="email" />
                Imperial
              </label>
            </div>
          </div>    
          <div className="flex flex-col ">
            <form action="" className="flex flex-col">
              <label className="font-inter font-normal text-sm	text-[#5E6E85] mb-2">
                Height
              </label>
              <input type="number" id="" name="" value="" className="border p-5 rounded-xl"/>
              <label className="font-inter font-normal text-sm	text-[#5E6E85] mt-4 mb-2">
                Weight
              </label>
              <input type="number" id="" name="" value="" className="border p-5 rounded-xl"/>
            </form>
          </div>

          <div id="result" className="">
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
    </div>
  );
}

export default App;
