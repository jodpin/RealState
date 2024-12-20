import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {

  
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
       
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
