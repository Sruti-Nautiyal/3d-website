import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* <Route exact path="/about" element={<About />} Component={About} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
