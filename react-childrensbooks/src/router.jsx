import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./views/Error";
import Book from "./views/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/book",
    element: <Book />,
  },
]);

export default router;
