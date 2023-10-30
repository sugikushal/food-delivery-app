import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantInfo?.info;
  const { deliveryTime } = restaurantInfo?.info?.sla;

  return (
    <div className="w-72 h-[22rem] m-2 hover:bg-gray-200 hover:rounded-lg hover:shadow-lg">
      <div className="flex flex-col p-2">
        <img
          className="h-44 w-72 rounded-lg object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="no img"
        />
        <div className="pt-1 font-mono font-semibold truncate">{name}</div>
        <div className="pt-1 font-mono text-xs">{cuisines.join(", ")}</div>
        <div className="pt-1 font-mono font-thin">{costForTwo}</div>
        <div className="pt-1 font-mono font-thin">{avgRating}</div>
        <div className="pt-1 font-mono font-thin">{deliveryTime} minutes</div>
      </div>
    </div>
  );
};

export const VegRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute mt-2 ml-4 p-1 bg-black text-white rounded-lg">Pure Veg</div>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
