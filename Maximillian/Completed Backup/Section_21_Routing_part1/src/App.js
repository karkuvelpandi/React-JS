import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import NoMatchPage from "./pages/NoMatchPage";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoMatchPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
