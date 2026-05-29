import NavigationBar from "./components/NavigationBar";
import Project2 from "./components/Project2";
import Project2Section from "./components/Project2Section";
import SurveySection from "./components/SurveySection";

export default function Page() {
  return (
  <div>
    <Project2 />
    <Project2Section/>
    <SurveySection/>
    <NavigationBar/>
    </div>
  );
}
