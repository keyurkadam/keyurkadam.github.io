import About from "./components/About";
import Banner from "./components/Banner";
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfoilo from "./components/Portfoilo";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="h-screen overflow-auto">
    <div className="">
      {/* <NavBar /> */}
      <Cursor />
      <Home />
      {/* <SocialLinks /> */}
      <About />
      <Skills />
      <Portfoilo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
