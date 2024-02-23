import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./Buttons/Profile";
import { Moreinfo } from "./Buttons/Moreinfo";

function App() {
  const [count, setCount] = useState(0);
  const logoText = "My App";
  const menuItems = ["Home", "About", "Contact"];
 return (
  <div className="App">
    <Navbar/>
    <Moreinfo/>
    <Profile/>
  </div>
);

}

export default App;
