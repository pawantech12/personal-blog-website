import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tags from "./pages/Tags.jsx";
import Authors from "./pages/Authors.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/tags",
    element: <App element={<Tags />} />,
  },
  {
    path: "/authors",
    element: <App element={<Authors />} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
