import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Book from "./Books/Book";
import Register from "./Pages/Registers/Register";
import SignIn from "./Pages/SignIn/SignIn";
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
        path: "/book",
        element: <Book />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);
