import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectCardList from "./ProjectCard";
import ProjectDetail from "./ProjectDetail"; // 各プロジェクトの詳細ページ用

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectCardList />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
