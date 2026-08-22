import NavigationBar from "./components/NavigationBar";
import ProjectEvent from "./components/Event";
import Section from "./components/Section";
import Survey from "./components/Survey";

export default function Page() {
  return (
    <div>
      <ProjectEvent />
      <Section />
      <Survey />
      <NavigationBar />
    </div>
  );
}