import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          console.log("filteredList", filteredList);
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="card-container">
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
