import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar"
function App(){
  return (
    <div className="bg-gray-50 text-gray-800 ">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;