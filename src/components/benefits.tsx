import HealthyEat from "./images/icon-eating.svg";
import Exercise from "./images/icon-exercise.svg";
import Sleep from "./images/icon-sleep.svg";

export function Benefits() {
  return (
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
  );
}
