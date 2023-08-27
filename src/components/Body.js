import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  console.log(restaurantList);
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4);
          console.log("filteredList", filteredList);
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantInfo={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
