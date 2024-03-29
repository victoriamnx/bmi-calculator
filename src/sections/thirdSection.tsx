import "./ThirdSection.css";
import IconEating from "../components/images/icon-eating.svg";
import IconExercise from "../components/images/icon-exercise.svg";
import IconSleep from "../components/images/icon-sleep.svg";

export function ThirdSection() {
  return (
    <section id="thirdSection">
      <div id="thirdSection-1">
        <div className="thirdSectionItem">
          <img src={IconEating} alt="iconEating" />
          <div>
            <h4>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src={IconExercise} alt="iconExercice" />
          <div>
            <h4>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src={IconSleep} alt="iconeSleep" />
          <div>
            <h4>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
