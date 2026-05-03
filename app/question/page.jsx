import React from "react";
import Faq from "./components/Faq";
import FaqSection from "./components/FaqSection";
import NavigationBar from "./components/NavigationBar";
import MascotDetail from "./components/MascotDetail";


function App() {
  return (
    <div className="App">
      <Faq />
      <NavigationBar/>
      <MascotDetail/>
    </div>
  );
}

export default App;
