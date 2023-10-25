import Restaurants from "../components/Restaurants";
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy, Suspense } from "react";

const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));

const children = [
  {
    path: "/",
    element: <Restaurants />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantMenu />,
  },
];

export default children;
