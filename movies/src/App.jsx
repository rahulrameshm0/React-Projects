// import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { SearchBar } from "./components/SearchBar.jsx";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  );
}

export default App;
