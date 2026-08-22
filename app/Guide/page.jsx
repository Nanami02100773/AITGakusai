import GuidePage from "./components/GuidePage";
import TopNavigationGuide from "./components/TopNavigationGuide";
import BottomNavigationGuide from "./components/BottomNavigationGuide";

import HomeGuide from "./components/HomeGuide";
import StageGuide from "./components/StageGuide";
import MapGuide from "./components/MapGuide";
import ProjectGuide from "./components/ProjectGuide";
import QuestionnaireGuide from "./components/QuestionnaireGuide";
import FaqGuide from "./components/FaqGuide";
import MascotGuide from "./components/MascotGuide";
import LoginGuide from "./components/LoginGuide";
import EnjoyGuide from "./components/EnjoyGuide";

import NavigationBar from "./components/NavigationBar";

export default function Page() {
  return (
    <div>
      <GuidePage />

      <TopNavigationGuide />
      <BottomNavigationGuide />

      <HomeGuide />
      <StageGuide />
      <MapGuide />
      <ProjectGuide />
      <QuestionnaireGuide />
      <FaqGuide />
      <MascotGuide />
      <LoginGuide />
      <EnjoyGuide />

      <NavigationBar />
    </div>
  );
}