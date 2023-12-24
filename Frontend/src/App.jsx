import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/BrowserRouter.jsx";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
