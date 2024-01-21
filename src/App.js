import "./App.css";
import NewHeader from "./components/header/newHeader";
import Widget from "./components/widget/Widget";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import { Professional as ProfessionalExperience } from "./components/professional/Professional";
function App() {
  return (
    <div className="App">
      <NewHeader />
      <Widget />
      <ProfessionalExperience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
