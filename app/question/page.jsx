import React from "react";
import Faq from "./components/Faq";
import FaqSection from "./components/FaqSection";
import NavigationBar from "./components/NavigationBar";
// import MascotDetail from "./components/MascotDetail";
import MascotCard from "./components/MascotCard";


function App() {
  return (
    <div className="App">
      <Faq />
      <NavigationBar/>
      {/* <MascotDetail/> */}
      <MascotCard/>
    </div>
  );
}

export default App;
