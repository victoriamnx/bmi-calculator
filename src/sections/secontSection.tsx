import "./SecondSection.css";
import ManEating from "../components/images//image-man-eating.webp";

export function SecondSection() {
  return (
    <section id="secondSection">
      <img src={ManEating} alt="manEating" />
      <div id="secondSection-1">
        <h1 className="font-inter font-semibold text-[#253347] text-3xl antialiased mt-12">
          What your BMI result means
        </h1>
        <p className="font-inter font-normal text-[#5E6E85] text-base antialiased">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}
