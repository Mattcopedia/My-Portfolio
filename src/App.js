import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black ">
      <NavBar />
       <br />
     
     
      <Home />
      <div>
      <About />
      </div>
      
      <Portfolio />  
      <Experience />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact />

      <SocialLinks />   
    </div>
  );
}

export default App;
