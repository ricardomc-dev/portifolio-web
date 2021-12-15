import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
