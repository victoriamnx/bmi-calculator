import { MetricOrImperial } from "../components/MetricOrImperial/MetricOrImperial";
import Logo from "../components/images/logo.svg";
import "./FirstSection.css"

export function FirstSection() {
  return (
    <section id="firstSection">
      <div id="firstSection-1">
        <img src={Logo} alt="logo" className="w-10 h-10 " />
        <div id="firstSection-1-1">
          <h1 className="font-inter font-semibold text-[#253347] text-5xl	text-center m-6 antialiased">
            Body Mass Index Calculator
          </h1>
          <p className="font-inter font-normal text-[#5E6E85] text-base	 text-center antialiased">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
      <div id="firstSection-2">
        <MetricOrImperial />
      </div>
    </section>
  );
}
