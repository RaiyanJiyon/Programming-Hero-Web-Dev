import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch('http://localhost:3000/coffee'),
    element: <App />,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />
  },
  {
    path: "update-coffee:id",
    loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`),
    element: <UpdateCoffee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
