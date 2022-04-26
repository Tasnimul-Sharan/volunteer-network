import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Shared/Header/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
