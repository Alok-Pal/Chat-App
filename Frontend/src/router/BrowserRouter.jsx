import { createBrowserRouter } from "react-router-dom";
import Test from "../Components/Test";
import Test1 from "../Components/Test1";
import GetData from "../Components/GetData";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    loader: GetData,
  },
  {
    path: "/test",
    element: <Test1 />,
  },
]);
