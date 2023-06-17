import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import Headphones from "./routes/Headphones";
import Speakers from "./routes/Speakers";
import Earphones from "./routes/Earphones";
import Checkout from "./routes/Checkout";
import Product, { loader } from "./routes/Product";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Headphones />,
        path: "headphones",
      },
      {
        element: <Speakers />,
        path: "speakers",
      },
      {
        element: <Earphones />,
        path: "earphones",
      },
      {
        element: <Checkout />,
        path: "checkout",
      },
      {
        element: <Product />,
        path: ":category/:productId",
        loader: loader,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
