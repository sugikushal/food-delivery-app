import RestaurantCard, { VegRestaurant } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/hooks/useRestaurantList";

const Restaurants = () => {
  const listOfRestaurants = useRestaurantList();
  const VegRestaurantCard = VegRestaurant(RestaurantCard);
  return (
      <div className="flex flex-wrap m-4 justify-center">
        {listOfRestaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="react-link"
            >
              {restaurant.info.veg ? (
                <VegRestaurantCard restaurantInfo={restaurant} />
              ) : (
                <RestaurantCard restaurantInfo={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
  );
};

export default Restaurants;
