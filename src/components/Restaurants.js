import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/hooks/useRestaurantList";

const Restaurants = () => {
  const listOfRestaurants = useRestaurantList();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          console.log("filteredList", filteredList);
          {/* setListOfRestaurants(filteredList); */}
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap justify-center">
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="react-link"
          >
            <RestaurantCard restaurantInfo={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
