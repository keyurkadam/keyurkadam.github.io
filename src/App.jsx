import About from "./components/About";
import Banner from "./components/Banner";
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfoilo from "./components/Portfoilo";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Cursor />
      <Home />
      {/* <SocialLinks /> */}
      <About />
      <Skills />
      <Portfoilo />
    </>
  );
}

export default App;
