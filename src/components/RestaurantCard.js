import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantInfo?.info;
  const { deliveryTime } = restaurantInfo?.info?.sla;

  return (
    <div className="w-72 h-96 m-2 hover:bg-gray-200 hover:rounded-lg hover:shadow-lg">
      <div className="flex flex-col p-2">
        <img
          className="h-44 w-72 rounded-lg object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="no img"
        />
        <div className="pt-1">{name}</div>
        <div className="pt-1">{cuisines.join(", ")}</div>
        <div className="pt-1">{costForTwo}</div>
        <div className="pt-1">{avgRating}</div>
        <div className="pt-1">{deliveryTime} minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
