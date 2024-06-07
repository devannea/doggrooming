import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, index: true },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
