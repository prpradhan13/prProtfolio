import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectPreview from "./pages/ProjectPreview";
import ViewAll from "./pages/ViewAllPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectPage" element={<ProjectPage />} />
        <Route path="/projectPreview/:id" element={<ProjectPreview />} />
        <Route path="/viewall/:category" element={<ViewAll />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
