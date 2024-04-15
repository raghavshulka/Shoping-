import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/Main.jsx";
import Bag from "./routes/Bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Main /> }, {
      path:"/bag",
      element:<Bag/>
    }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
