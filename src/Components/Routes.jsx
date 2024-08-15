import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Food from "./Books/Book";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food",
        element: <Food />,
      },
    ],
  },
]);
