import Navbar from "./Components/navbar/navbar";
import MainView from "./Components/MainView/main-view";

import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
    },
  ]);

  return (
    <Fragment>
      {/* <Navbar />

      <MainView />*/}

      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
