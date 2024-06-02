import { Routes, Route } from "react-router-dom";
import Homee from "./pages/Home/Homee";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Consultation from "./pages/Consultation/Consultation";
import Error from "./pages/Error/Error";
import "./App.css";
import Layout from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="app_container">
      <div>
        <Routes>
          <Route path="/" element={<Homee></Homee>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/project" element={<Projects></Projects>}></Route>
          <Route
            path="/consultation"
            element={<Consultation></Consultation>}
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
