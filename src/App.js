
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Productslist from "./Components/Productslist";
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
import Productdetails from "./Components/Productdetails";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Productslist />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
              
            </>
          }
        />
        <Route
          path="product/:productid"
          element={
            <>
              <Productdetails />
              
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
