import Home from "./pages/Home/Home";
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects";
import TechStack from "./pages/Home/sections/TechStack/TechStack";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <TechStack />
      <Projects/>
    </>
  );
};

export default App;
