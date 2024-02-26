import Logo from "./components/images/logo.svg";
import { Benefits } from "./components/benefits";
import { BMIResult } from "./components/bmi_result";


function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#ffff] ">
      <div
        id="init"
        className="flex flex-col px-6 items-center rounded-b-[35px] overflow-visible mb-[450px]"
      >
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

        <div
          id="result"
          className="bg-white p-6 rounded-2xl mt-12 mb-12 flex flex-col gap-6 relative"
        >
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
              <input
                type="number"
                id=""
                name=""
                value=""
                className="border p-5 rounded-xl"
              />
              <label className="font-inter font-normal text-sm	text-[#5E6E85] mt-4 mb-2">
                Weight
              </label>
              <input
                type="number"
                id=""
                name=""
                value=""
                className="border p-5 rounded-xl"
              />
            </form>
          </div>

          <div className="flex flex-col p-8 bg-[#345FF6] rounded-2xl gap-6">
            <div>
              {" "}
              <h1 className="font-inter font-semibold text-base text-white">
                {" "}
                Your BMI is...
              </h1>
              <span className="font-inter font-semibold text-5xl text-white">
                result{" "}
              </span>
            </div>
            <p className="font-inter font-normal text-sm text-white">
              Your BMI suggests you're add classification Your ideal weight is
              between add range
            </p>
          </div>
        </div>
      </div>

    <BMIResult/>

      <Benefits/>

      <div className="flex flex-col px-6">
        <div>
          <h1> Limitations of BMI</h1>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        <div>
          <div>
            <div>
              <img src="" alt="" />
              <h1>Gender</h1>
            </div>
            <p>
              {" "}
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h1>Age</h1>
            </div>
            <p>
              {" "}
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>{" "}
          <div>
            <div>
              <img src="" alt="" />
              <h1>Muscle</h1>
            </div>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h1>Pregnancy</h1>
            </div>
            <p>
              {" "}
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>{" "}
          <div>
            <div>
              <img src="" alt="" />
              <h1>Race</h1>
            </div>
            <p>
              {" "}
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
