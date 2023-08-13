import Navbar from "./Components/navbar/navbar";
import MainView from "./Components/MainView/main-view";
import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />{" "}
    </Routes>
  );
}

export default App;
