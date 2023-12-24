import { createBrowserRouter } from "react-router-dom";
import Test from "../Components/Test";
import Test1 from "../Components/Test1";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/test",
    element: <Test1 />,
  },
]);
