import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Pages/Layout/layout";
import Home from "./Pages/Home/home";
import MainView from "./Components/MainView/main-view";
import DetailProduct from "./Components/detail-product/detail-product";

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
        {
          path: "/items/:id",
          element: <DetailProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
