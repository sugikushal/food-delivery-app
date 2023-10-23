import Restaurants from "../components/Restaurants";
import About from "../components/About";
import Contact from "../components/Contact";
import RestaurantMenu from "../components/RestaurantMenu";

const children =
    [
        {
          path: "/",
          element: <Restaurants />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu/>
        }
      ];

export default children;
