import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import children from "./utils/routerConfig";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
import store from "./store/AppStore";
import { Provider } from "react-redux";

const Footer = () => {
  return <div className="footer">Footer</div>;
};

const App = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <Provider store={store}>
      <div className="spp-component">
        <Header />
        {onlineStatus ? <Outlet /> : <h2>You seem to be offline. Check your Internet connection.</h2>}
        {/* <Footer /> */}
      </div>
    </Provider>
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
