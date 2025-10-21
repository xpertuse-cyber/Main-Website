// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
