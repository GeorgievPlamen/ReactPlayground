import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Axios from "../../pages/Axios/Axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Axios /> }],
    errorElement: <div>Not found</div>,
  },
]);
