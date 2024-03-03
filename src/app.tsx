import { FirstSection } from "./sections/firstSection";
import { SecondSection } from "./sections/secontSection";
import { ThirdSection } from "./sections/thirdSection";
import { FourthSection } from "./sections/fourthSection";

function App() {
  return (
    <div id="app" className="flex flex-col w-screen h-screen">
      <FirstSection />
      <img
        src="/components/images/pattern-curved-line-left.svg"
        alt="leftCurvedLine"
      />
      <SecondSection />
      <ThirdSection />
      <img
        src="/components/images/pattern-curved-line-right.svg"
        alt="rightCurvedLine"
      />
      <FourthSection />
    </div>
  );
}

export default App;
