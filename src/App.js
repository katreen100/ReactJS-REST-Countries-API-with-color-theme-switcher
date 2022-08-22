import "./App.css";
import stor from "./stor/index";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import CountryDetails from "./countrydetails";
import Navbar from "./navbar";
function App() {
  
  
  return (
    <>
      <Provider store={stor}>
        <Navbar/>
        <Router>
          <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/:countryName' exact element={<CountryDetails/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
