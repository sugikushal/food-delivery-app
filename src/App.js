import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import children from "./utils/routerConfig";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

const Footer = () => {
  return <div className="footer">Footer</div>;
};

const App = () => {
  return (
    <div className="spp-component">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: children,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
