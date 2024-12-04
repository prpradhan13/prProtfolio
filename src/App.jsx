import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectPreview from "./pages/ProjectPreview";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectPage" element={<ProjectPage />} />
        <Route path="/projectPreview/:id" element={<ProjectPreview />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
