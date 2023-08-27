import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantInfo?.info;
  const { deliveryTime } = restaurantInfo?.info?.sla;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        alt="no img"
      />
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-cuisine">{cuisines.join(", ")}</div>
      <div className="restaurant-cuisine">{costForTwo}</div>
      <div className="restaurant-cuisine">{avgRating}</div>
      <div className="restaurant-cuisine">{deliveryTime} minutes</div>
    </div>
  );
};

export default RestaurantCard;
