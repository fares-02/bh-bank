import "./App.css";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Navigations from "./components/Navigations";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
