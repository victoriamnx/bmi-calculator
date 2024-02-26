import Logo from "./components/images/logo.svg";
import Photo from "./components/images/image-man-eating.webp";
import HealthyEat from "./components/images/icon-eating.svg";
import Exercise from "./components/images/icon-exercise.svg";
import Sleep from "./components/images/icon-sleep.svg";

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

      <div className="w-screen h-auto flex flex-col">
        <img src={Photo} alt="" />
        <div className="flex flex-col px-6 gap-8 mb-16">
          <h1 className="font-inter font-semibold text-[#253347] text-3xl antialiased mt-12">
            What your BMI result means
          </h1>
          <p className="font-inter font-normal text-[#5E6E85] text-base antialiased">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>

      <div id="benefits" className="w-screen flex flex-col gap-10 px-6 py-14">
        <div className="flex flex-col gap-6">
          <img src={HealthyEat} alt="" className="w-16 h-16 " />
          <h1> Healthy eating</h1>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <img src={Exercise} alt="" className="w-16 h-16 " />
          <h1> Regular exercise</h1>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <img src={Sleep} alt="" className="w-16 h-16 " />
          <h1> Adequate sleep</h1>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
