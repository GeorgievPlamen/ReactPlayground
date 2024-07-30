import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Axios from "../../pages/Axios/Axios";
import SuspenseTest from "../../pages/Suspense/SuspenseTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/axios", element: <Axios /> },
      { path: "/Suspense", element: <SuspenseTest /> },
    ],
    errorElement: <div>Not found</div>,
  },
]);
