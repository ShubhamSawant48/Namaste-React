import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
