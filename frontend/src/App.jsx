import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      <Dashboard />
    </>
  );
}

export default App;
