import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Pages/Layout/layout";
import Home from "./Pages/Home/home";
import MainView from "./Components/MainView/main-view";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/items",
          element: <MainView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
